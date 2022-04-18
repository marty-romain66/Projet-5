let params = new URL(document.location).searchParams;
let id = params.get("id");


let url = `http://localhost:3000/api/products/${id}`;
const getArticles = () => {
    fetch(url)
        .then(function(reponse) {
            return reponse.json();
        })

    .then(function(data) {
        console.log(data);
        const article = data;
        let addTitle = (document.getElementById("title").innerText =
            article.name);
        let addPrice = (document.getElementById("price").innerText =
            article.price);

        let addImg = document.createElement("img");
        document.querySelector(".item__img").appendChild(addImg);
        addImg.setAttribute("src", `${article.imageUrl}`);
        addImg.setAttribute("class", "img-fluid");

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
addToCart.addEventListener("click", () => {
    let addProduct = {
        quantity: document.getElementById("quantity").value,
        color: document.getElementById("colors").value,
        id: id,

    }


    addProductLocalStorage = [];
    if (localStorage.getItem("addToCart") !== null) {
        addProductLocalStorage = JSON.parse(localStorage.getItem("addToCart"));
        addProductLocalStorage.push(addProduct);
        localStorage.setItem("addToCart", JSON.stringify(addProductLocalStorage));


    } else {
        addProductLocalStorage.push(addProduct);
        localStorage.setItem("addToCart", JSON.stringify(addProductLocalStorage));
    }



});