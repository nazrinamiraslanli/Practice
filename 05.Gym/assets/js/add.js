const BASE_URL = "http://localhost:8080";
const tBody = document.querySelector("tbody");
const allInput = document.querySelectorAll("input");
const form = document.querySelector("form");
const sort = document.querySelector(".sort");
const search = document.querySelector(".search");
let product;
let copyProduct;
async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  product=res.data
  drawTable(res.data);
}
getData();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    const tr = document.createElement("tr");

    tr.innerHTML += `
    <td>${element.id}</td>
    <td>  <img src="${element.img}" alt=""></td>
    <td>${element.name}</td>
    <td>${element.des}</td>
    <td>${element.price}</td>
    <td><i class="fa-solid fa-trash fa-shake" onclick=productDelete("${element.id}",this)></i></td>
        `;
    tBody.append(tr);
  });
}
// ADD
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    name: allInput[0].value,
    des: allInput[1].value,
    price: allInput[2].value,
    img: allInput[3].value,
  };
  try {
    await axios.post(`${BASE_URL}/cards`, obj);
  } catch (error) {
    console.log(error);
  }
});
// DELETE
async function productDelete(id, btn) {
  try {
    if (window.confirm("r u sure to delete?")) {
      await axios.delete(`${BASE_URL}/cards/${id}`);
      btn.closest("tr").remove();
    }
  } catch (error) {
    console.log(error);
  }
}
// SORT
sort.addEventListener("click", function () {
  let sorted;
  if (sort.innerText === "asc") {
    sort.innerText = "dec";
    sorted = product.sort((a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
    );
  } else if (sort.innerText === "dec") {
    sort.innerText = "asc";
    sorted = product.sort((a, b) =>
      b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase())
    );
  } else if (sort.innerText === "asc") {
    sorted = copyProduct;
  }
  drawTable(sorted);
});
// SEARCH
search.addEventListener("input", function(e){
  // let filtered=product.filter(item=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  let filtered=product.filter(item=>item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  drawTable(filtered)
  // console.log(e.target.value);
})