const BASE_URL = " http://localhost:8080";
const cards = document.querySelector(".cards");

async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  drawCards(res.data);
}
getData();

function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
        <div class="image">
                <img src="${element.img}" alt="" />
                <div class="icon">
                  <i class="fa-regular fa-heart"></i
                  ><i class="fa-regular fa-heart"></i
                  ><i class="fa-regular fa-heart"></i
                  ><i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <h4>${element.name}</h4>
              <h3>$${element.price}</h3>
        `;
    cards.append(card);
  });
}
const menuIcon = document.querySelector(".fa-solid");
const navBar = document.querySelector("nav");
menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.className = "fa-solid fa-x")
    : (this.className = "fa-solid fa-bars");
});
