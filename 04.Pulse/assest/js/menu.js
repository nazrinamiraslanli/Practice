const inputAll = document.querySelectorAll("input");
const form = document.querySelector("form");
const tBody = document.querySelector("tbody");
const sort = document.querySelector(".sort");
const BASE_URL = " http://localhost:8000";
let product;
let copyProduct;
async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  product = res.data;
  copyProduct = [...res.data];
  drawTable(res.data);
  console.log(product);
}
getData();
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    name: inputAll[0].value,
    description: inputAll[1].value,
    price: inputAll[2].value,
    category: inputAll[3].value,
  };
  try {
    await axios.post(`${BASE_URL}/cards`, obj);
  } catch (error) {
    console.log(error);
  }
});

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML += `
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    <td>
    <i class="fa-solid fa-trash" onclick=deleteProduct("${element.id}",this)></i>
    <i class="fa-solid fa-pen"></i>
    <i class="fa-solid fa-heart"></i>
    </td>
    `;
    tBody.append(tr);
  });
}
const delBtn = document.querySelector(".fa-trash");
async function deleteProduct(id, btn) {
  try {
    if (confirm("r u sure to delete??")) {
      await axios.delete(`${BASE_URL}/cards/${id}`);
      btn.closest("tr").remove();
    }
  } catch (error) {
    console.log(error);
  }
}
sort.addEventListener("click", function () {
  let sorted;
  if (sort.innerText === "asc") {
    sort.innerText = "dec";
    sorted = product.sort((a, b) => a.id - b.id);
  } else if (sort.innerText === "dec") {
    sort.innerText = "asc";
    sorted = product.sort((a, b) => b.id - a.id);
  } else if (sort.innerText === "asc") {
    sorted = copyProduct;
  }
  drawTable(sorted);
});
