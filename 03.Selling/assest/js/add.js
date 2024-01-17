const BASE_URL = "http://localhost:3000";
const tBody = document.querySelector("tbody");
async function getData() {
    const res = await axios(`${BASE_URL}/cards`);
    console.log(res.data);
    drawTable(res.data);
  }
  getData();
  function drawTable(arr) {
    tBody.innerHTML = "";
    arr.forEach((element) => {
      let tr = document.createElement("tr");
      tr.innerHTML += `
     <td>${element.id}</td>
     <td>${element.name}</td>
     <td>${element.description}</td>
     <td><i class="fa-solid fa-trash onclick="deleteProduct(${element.id},this)"></i><i class="fa-solid fa-pen"></i></td>
          `;
      tBody.append(tr);
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
  