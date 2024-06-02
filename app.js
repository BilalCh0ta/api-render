
const card = document.querySelector('.products')

axios('https://fakestoreapi.com/products')
    .then(responce => {
        console.log(responce.data);
        responce.data.map((item,index) => {
            card.innerHTML += `
            <div class="card bg-dark text-white p-2"  ">
            <img width='150' height='200' src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Category : ${item.category}</h5>
            <h5 class="card-title">Rating : ${item.rating.rate} Count : ${item.rating.count}</h5>
            <p class="card-text">Price : $${item.price}</p>
            <a id='addBtn' class="btn btn-primary" onclick='addToCard(${index})'>Add To Card</a>
            </div>
            </div>`
        })
    })
    .catch(error => {
        console.log(error);
    })









