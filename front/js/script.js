let url = "http://localhost:3000/api/products"
fetch(url).then(reponse => reponse.json().then(data => {
    console.log(data)
    let affichage = ``
    for (let nom of data) {
        affichage += `<a href="./product.html?id=${nom._id}"><article><img src="${nom.imageUrl}" alt="${nom.altTxt}""><h3>${nom.name}</h3><p>${nom.description}</p></article>`;
    }

    affichage += "</a>"
    newFunction(affichage);
}))

function newFunction(affichage) {
    document.getElementById("items").innerHTML = affichage;
}