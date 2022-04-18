let params = new URL(document.location).searchParams;
let id = params.get("id");

let url = `http://localhost:3000/api/products/${id}`;
const getArticles = () => {
  fetch(url)
    .then(function (reponse) {
      return reponse.json();
    })

    .then(function (data) {
      console.log(data);
      const article = data;
      let addTitle = (document.getElementById("title").innerText =
        article.name);
      let addPrice = (document.getElementById("price").innerText =
        article.price);
      let addDescription = (document.getElementById("description").innerText =
        article.description);
      let addOption = document.getElementById("colors");
      for (color in article.colors) {
        addOption.innerHTML += `<option value="${article.colors[color]}">${article.colors[color]}</option>`;
      }
    });
};
getArticles();

let addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", function (e) {
  e.preventDefault();
  let quantity = document.getElementById("quantity").value;
  let color = document.getElementById("colors").value;
  console.log(quantity);
  console.log(color);
});
