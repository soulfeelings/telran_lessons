const buttonGetProducts = document.querySelector(".GetProductsButton");

buttonGetProducts.addEventListener("click", () => {
  const result = fetch("https://dummyjson.com/products");

  result.then((res) => {
    const jsonResult = res.json();

    jsonResult.then((data) => {
      const { products } = data;
      render(products);
    });
  });
});

function render(arrayProducts) {
  console.log(arrayProducts);
  arrayProducts.forEach(({ price, images }) => {
    const html = `
        <div class="ImageCart">
            <img src="${images[0]}" />
            <p>Price: ${price}</p>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);
  });
}
