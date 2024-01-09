const BASE_URL = "http://localhost:3000";
const cards = document.querySelector(".section2");
async function getData(endPoint) {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
  drawCard(res.data);
}
getData("all");

function drawCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    let card = document.createElement("div");
    card.className="card"
    card.innerHTML += `
      <div class="img"><img src="${element.img}" alt="" /></div>
      <div class="text">
        <h3>${element.name}</h3>
        <p>${element.details}</p>
        <a href="details.html?id=${element.id}"><button class="but2">VIEW DETAILS</button></a>
       </div>
       `;
    bottom.append(card);
  });
}
