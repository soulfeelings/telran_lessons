const list = document.getElementById("list");

const get_products = () => {
  const promiseFromFetch = fetch("https://dummyjson.com/products");

  const promiseFromJson = promiseFromFetch.then((response) => {
    return response.json();
  });

  return promiseFromJson.then((data) => {
    return data.products;
  });
};

const productsPromise = get_products();

const render = (products) => {
  const htmlElements = products.map((product) => {
    const div = document.createElement("div");
    div.innerHTML = `${product.title} - ${product.price} - ${product.rating}`;
    div.style.padding = "5px";
    return div;
  });

  list.append(...htmlElements);
};

productsPromise.then(render);

const json = (res) => res.json();

const get_product = () => {
  fetch("https://dummyjson.com/products")
    .then(json)
    .then((json) => console.log(json.products));
};

get_product();

const form = document.querySelector(".SortPriceForm");
const { min, max, button } = form;

button.onclick = (event) => {}
button.addEventListener("click", (event) => {
  event.preventDefault();

  const result = get_products();

  result.then((products) => {
    const filteredArray = products.filter(({ price }) => {
      if (min.value < price && max.value > price) {
        return true;
      } else {
        return false;
      }
    });

    list.innerHTML = "";
    render(filteredArray);
  });
});
