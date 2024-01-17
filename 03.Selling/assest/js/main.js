const BASE_URL = "http://localhost:3000";
const cards = document.querySelector(".cards");

async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  drawCard(res.data);
}
getData();

function drawCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.className="card"
    card.innerHTML += `
    <div class="image">
    <img src="${element.image}" alt="" />
  </div>
  <div class="text">
    <a href="#"><h3>${element.name}</h3></a>
    <div class="icon">
      <i class="fa-solid fa-star"></i><span>5.0</span>
      <i class="fa-solid fa-heart"></i><span>29</span>
    </div>
    <p>${element.description}</p>
    <div class="buttons">
      <button class="but3">CART</button>
      <button class="but4">VIEW</button>
      <button class="but3" onclick="deleteProduct(${element.id},this)">DELETE</button>
    </div>
  </div>
        `;
    cards.append(card);
  });
}
async function deleteProduct(id, btn) {
    try {
      if (window.confirm("r u sure to delete??")) {
        await axios.delete(`${BASE_URL}/cards/${id}`);
        btn.closest(".box").remove();
      }
    } catch (error) {
      console.log(error);
    }
  }