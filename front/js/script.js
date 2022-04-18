let url = "http://localhost:3000/api/products/";
const getArticles = () => {
  fetch(url)
    .then(function (reponse) {
      return reponse.json();
    })

    .then(function (data) {
      console.log(data);
      const listeProduct = data;
      for (products in listeProduct) {
        let productsCard = document.createElement("a");
        productsCard.setAttribute(
          "href",
          "./product.html?id=" + listeProduct[products]._id
        );
        document.getElementById("items").appendChild(productsCard);

        let card = document.createElement("article");
        productsCard.appendChild(card);

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", listeProduct[products].imageUrl);
        card.appendChild(cardImg);

        let cardTitle = document.createElement("h3");
        cardTitle.innerHTML = listeProduct[products].name;
        card.appendChild(cardTitle);

        let cardDescription = document.createElement("p");
        cardDescription.innerHTML = listeProduct[products].description;
        card.appendChild(cardDescription);
      }
    });
};

getArticles();

