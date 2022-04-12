let url = "http://localhost:3000/api/products"
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
let affichage = '<a>'
for (let nom of data) {
    affichage += `<article><img src="${nom.imageUrl}" alt="${nom.altTxt}""><h3>${nom.name}</h3><p>${nom.description}</p></article>`;
}
affichage += "</a>"
newFunction(affichage);