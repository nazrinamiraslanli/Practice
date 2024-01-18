const inputAll = document.querySelectorAll("input");
const form = document.querySelector("form");
const BASE_URL = " http://localhost:8000";

async function getData() {
  const res = await axios(`${BASE_URL}/cards`);
  console.log(res.data);
//   drawCard(res.data);
}
getData();
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    name: inputAll[0].value,
    description: inputAll[1].value,
    price: inputAll[2].value,
    
    category: inputAll[3].value,
  };
  try {
    await axios.post(`${BASE_URL}/cards`,obj);
  } catch (error) {
    console.log(error);
  }
});
