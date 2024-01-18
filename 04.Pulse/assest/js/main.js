const BASE_URL = " http://localhost:8000";
const cards = document.querySelector(".boxs-cards");
const breakfast = document.querySelector(".breakfast");
const brunch = document.querySelector(".brunch");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
let product = [];
async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  product=res.data
  drawCard(res.data);
}
getData();
function drawCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.className = "box";
    card.innerHTML += `
    <h1>${element.name}</h1>
                <div class="price">
                  <p>${element.description}</p>
                  <h2>$${element.price}</h2>
                </div>
    `;
    cards.append(card);
  });
}
breakfast.addEventListener("click", function () {
    let breakfast=product.filter((item)=>item.category==="Breakfast")
    drawCard(breakfast)
});
brunch.addEventListener("click", function () {
    let brunch=product.filter((item)=>item.category==="Brunch")
    drawCard(brunch)
});
lunch.addEventListener("click", function () {
    let lunch=product.filter((item)=>item.category==="Lunch")
    drawCard(lunch)
});
dinner.addEventListener("click", function () {
    let dinner=product.filter((item)=>item.category==="Dinner")
    drawCard(dinner)
});
