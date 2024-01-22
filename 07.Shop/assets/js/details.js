const BASE_URL = " http://localhost:8080";
const card = document.querySelector(".box");
let id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URL}/cards/${id}`);
  console.log(res.data);
  drawCards(res.data);
}
getData();

function drawCards(data) {
  card.innerHTML = `
        <div class="image">
        <img src="${data.img}" alt="" />
      </div>
      <div class="text">
        <h4>${data.name}</h4>
        <p>$
          ${data.price}
        </p>
        <span>${data.des}</span>
       <button class="goback" onclick=goBack()>Go back</button>
      </div>
        `;
}
function goBack() {
  window.history.back();
}
