let commandeClient__JSON = localStorage.getItem("addToCart");
let commandeClient = JSON.parse(commandeClient__JSON);
console.log(commandeClient);
// console.log(commandeClient[0].id);
id = commandeClient[0].id;

for (commande in commandeClient) {

    conteneur = document.createElement("article");
    conteneur.classList.add("cart__item");
    conteneur.setAttribute("data-id", commandeClient[commande].id);
    conteneur.setAttribute("data-color", commandeClient[commande].color);
    conteneur.innerHTML = `<div class="cart__item__img">
    <img src="../images/product01.jpg" alt="Photographie d'un canapé">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>Nom du produit</h2>
      <p>Vert</p>
      <p>42,00 €</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>`;
    let aff = document.querySelector("#cart__items");
    aff.appendChild(conteneur);

    let deleteItems = document.querySelector(".deleteItem");
    deleteItems.addEventListener("click", () => {
        commandeClient.splice(commande, 1);
        localStorage.setItem("addToCart", JSON.stringify(commandeClient));
        location.reload();
    });
}

// for (commmande in commandeClient) {
//     let url = `http://localhost:3000/api/products/${id}`;
//     let getArticles = () => {
//             fetch(url)
//                 .then(function(reponse) {
//                     return reponse.json();
//                 })

//             .then(function(data) {
//                 console.log(data);
//                 const article = data;

//                 // creation de la div qui contient le produit
//                 for (commande in commandeClient) {
//                     //     priceCommande = commandeClient[0].quantity * article.price;
//                     //     conteneur = document.getElementById("cart__items")
//                     //     conteneur.innerHTML = `<article class="cart__item" data-id="${commandeClient[0].id}" data-color="${commandeClient[0].color}">
//                     // <div class="cart__item__img">
//                     //   <img src="${article.imageUrl}" alt="${article.altTxt}">
//                     // </div>
//                     // <div class="cart__item__content">
//                     //   <div class="cart__item__content__description">
//                     //     <h2>Nom du produit : ${article.name}</h2>
//                     //     <p> Couleur : ${commandeClient[0].color}</p>
//                     //     <p> Prix : ${priceCommande} €</p>
//                     //   </div>
//                     //   <div class="cart__item__content__settings">
//                     //     <div class="cart__item__content__settings__quantity">
//                     //       <p>Qté :${commandeClient[0].quantity} </p>
//                     //       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//                     //     </div>
//                     //     <div class="cart__item__content__settings__delete">
//                     //       <p class="deleteItem">Supprimer</p>
//                     //     </div>
//                     //   </div>
//                     // </div>
//                     // </article> `

//                     conteneur = document.getElementById("cart__items")
//                     let article = document.createElement("article")
//                     conteneur.appendChild(article);
//                     article.innerHTML = ` <div class="cart__item__img">
//                          <img src="" alt="">
//                        </div>
//                        <div class="cart__item__content">
//                          <div class="cart__item__content__description">
//                            <h2>Nom du produit :</h2>
//                            <p> Couleur : </p>
//                            <p> Prix :  €</p>
//                          </div>
//                          <div class="cart__item__content__settings">
//                            <div class="cart__item__content__settings__quantity">
//                              <p>Qté :</p>
//                              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//                            </div>
//                            <div class="cart__item__content__settings__delete">
//                              <p class="deleteItem">Supprimer</p>
//                            </div>
//                          </div>
//                        </div>`
//                         //             conteneur.createElement = `<article class="cart__item" data-id="" data-color="">
//                         // <div class="cart__item__img">
//                         //   <img src="" alt="">
//                         // </div>
//                         // <div class="cart__item__content">
//                         //   <div class="cart__item__content__description">
//                         //     <h2>Nom du produit :</h2>
//                         //     <p> Couleur : </p>
//                         //     <p> Prix :  €</p>
//                         //   </div>
//                         //   <div class="cart__item__content__settings">
//                         //     <div class="cart__item__content__settings__quantity">
//                         //       <p>Qté :</p>
//                         //       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//                         //     </div>
//                         //     <div class="cart__item__content__settings__delete">
//                         //       <p class="deleteItem">Supprimer</p>
//                         //     </div>
//                         //   </div>
//                         // </div>
//                         // </article> `
//                 }
//                 // let supprimerPanier = () => {
//                 //     let deleteItems = document.querySelector(".deleteItem");
//                 //     deleteItems.addEventListener("click", () => {
//                 //         localStorage.removeItem("addToCart");
//                 //         location.reload();
//                 //     })
//                 // }
//                 // supprimerPanier();

//             })
//         }
//         //  formulaire de commande

//     // ecoute de input quantitee

//     getArticles()
// }