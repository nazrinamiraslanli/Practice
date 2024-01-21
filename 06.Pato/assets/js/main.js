const BASE_URL=" http://localhost:8080"
const cards=document.querySelector(".boxs")
async function getData(){
    const res=await axios(`${BASE_URL}/cards`)
    console.log(res.data)
    drawCards(res.data)
}
getData()

function drawCards(arr){
    cards.innerHTML=""
    arr.forEach((element) => {
        const card=document.createElement("div")
        card.className="box"
        card.innerHTML+=`
        <div class="image">
        <img src="${element.img}" alt="" />
      </div>
      <div class="text">
        <h4>${element.name}</h4>
        <p>
          ${element.des}
        </p>
        <a href="details.html?id=${element.id}">LEARN MORE -></a>
      </div>
        `
        cards.append(card)
    });
}