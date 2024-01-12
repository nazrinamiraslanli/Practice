const BASE_URL = " http://localhost:3000";
const cards = document.querySelector(".box-cards");
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
    card.className="box"
    card.innerHTML = `
    <div class="image">
     <img src="${element.image}" alt="" />
    </div>
     <h5><a href="#">${element.name}</a></h5>
     <p>UniCode</p>
     <button class="but5" onclick="deleteProduct(${
        element.id
      },this)">Delete</button>
       `;
       cards.append(card);
    });
    console.log(cards);
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