let url ="http://localhost:3000/api/products/"

const getArticles = () => {
fetch(url)
.then(reponse => reponse.json()
.then(data))
}
console.log(data)


