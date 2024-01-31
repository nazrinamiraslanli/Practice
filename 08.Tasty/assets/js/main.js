const BASE_URL = " http://localhost:3000";
const cards = document.querySelector(".boxs");
const mainBtn = document.querySelector(".main");
const desertBtn = document.querySelector(".desert");
const drinksBtn = document.querySelector(".drinks");
let product = [];
async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  product = res.data;
  drawCard(res.data);
}
getData();
function drawCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.className = "box";
    card.innerHTML += `
    <div class="image">
                <img src="${element.img}" alt="" />
              </div>
              <div class="text">
                <h5>${element.name}</h5>
                <p>${element.des}</p>
              </div>
              <div class="price">
                <h1>$${element.price}</h1>
              </div>
    `;
    cards.append(card);
  });
}
mainBtn.addEventListener("click", function () {
  let main = product.filter((item) => item.category === "main");
  drawCard(main);
});
desertBtn.addEventListener("click", function () {
  let desert = product.filter((item) => item.category === "desert");
  drawCard(desert);
});
drinksBtn.addEventListener("click", function () {
  let drinks = product.filter((item) => item.category=== "drink");
  drawCard(drinks);
});
