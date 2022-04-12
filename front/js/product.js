let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id)
fetch(`http://localhost:3000/api/products/${id}`).then(reponse => reponse.json().then(data => {
    console.log(data)
    console.log(data.altTxt)
    document.getElementById("title").innerHTML = data.name;
    document.getElementById("price").innerHTML = data.price;
    document.getElementById("description").innerHTML = data.description;
    document.querySelector(".item__img").innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;




}))