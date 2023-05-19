
const button = document.querySelector(".id_form__button");
const input = document.querySelector(".id_form__input");
const cards = document.querySelector(".cards");
const { min, max, form_btn } = document.querySelector(".filter_form");

form_btn.addEventListener("click", (e) => {
  e.preventDefault();
  cards.innerHTML = "";
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.products.sort((a, b) => a.price - b.price);

      console.log(data.products[0], data.products[data.products.length - 1]);
      
      const filteredProducts = data.products.filter(({ price }) => {
        return price > min.value && price < max.value;
      });

      filteredProducts.forEach((product) => {
        renderProduct(product);
      });
    });
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  cards.innerHTML = "";
  // 1. получить значение инпута где id
  console.log(input.value);

  // 2. отправить запрос по адресу   https://dummyjson.com/products/1 - где 1 это должен быть id из инпута

  fetch(`https://dummyjson.com/products/${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      renderProduct(data);
    });
});

function renderProduct(product) {
  const title = product.title;
  const desc = product.description;
  const price = product.price;
  const url = product.images[0];

  const html = `
    <div class="card">
        <img src="${url}" />
        <h1>${title}</h1>
        <p>${desc}</p>
        <p>Price: ${price}$</p>
    </div>
    
    `;

  cards.insertAdjacentHTML("afterbegin", html);
}

const func = () => {
    
}
let func1 = () => {}
var func2 = () => {}
function func3() {
    
}


