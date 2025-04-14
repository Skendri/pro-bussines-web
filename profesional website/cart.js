let allFruits = [
  {
    id: 0,
    image: "images/peaches.png",
    name: "Farm Fresh Ogranics",
    price: "$7.99",
    discount: "-25%",
    name1: "Fruits 250g",
  },

  {
    id: 1,
    image: "images/apple.jpg",
    name: "apple fresh organics",
    price: "$7.99",
    discount: "-25%",
    name1: "Fruits 250g",
  },
];

let cartHtml = " ";

allFruits.forEach((fruit) => {
  cartHtml += `
  <ul class="item" id="${fruit.id}">
        <img src="${fruit.image}" alt="peaches" />
        <span>Fresh Items</span>
        <h2>
        ${fruit.name}
          <br />
          ${fruit.name1}
        </h2>
        <h3 class="price">
        ${fruit.price}
          <span>kg</span>
        </h3>
        <i class="bx bx-heart"></i>
        <span class="discount">${fruit.discount}</span>
      </ul>
  `;
});
document.querySelector("cart-item").innerHTML = cartHtml;
console.log(cartHtml);

export function addToCart(productId) {
  let matchingFruit;

  if (matchingFruit) {
    matchingFruit.quantity += 1;
  } else {
    fruit.push = {
      productId: productId,
      quantity: 1,
    };
  }
}