const BASE_URL = "http://localhost:8080";
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
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `
        <div class="image">
                <img src="${element.img}" alt="" />
              </div>
              <div class="text">
                <h3>${element.name}</h3>
                <h2>$${element.price}</h2>
              </div>
        `;
    cards.append(card);
  });
}
