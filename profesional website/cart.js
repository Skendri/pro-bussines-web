
// let colors = {
//   firstColor: "red",
//   secondColor: "blue",
//   thirdColor: "yellow",
//   fourthColor: "green"
// }

// localStorage.setItem("colors", JSON.stringify(colors));

// let getItem = JSON.parse(localStorage.getItem("colors"));

// console.log(getItem);

import { updateCart } from "./script.js";
const cart = document.querySelector(".cart");
console.log(updateCart);

function loadItem() {
  let getItem = JSON.parse(localStorage.getItem("cards"));
  if (getItem) {
    selectedItem = getItem;
  } else {
    selectedItem = {};
  }

  // cards.forEach((card) => {

  // })
}

console.log(getItem);



// function updateCart() {
//   let total = 0;
//   let cartContent = "";
//   for (const itemId in selectedItem) {
//     const item = selectedItem[itemId];
//     const itemTotal = item.price * item.count;
//     total += itemTotal;
//     cartContent += `<div class="cart-item">
//       <img src="${item.image}" alt="${item.name}">
//       <h2>${item.name}</h2>
//       <p>${item.price}€</p>
//       <p>Quantity: ${item.count}</p>
//       <p>Total: ${itemTotal}€</p>
//     </div>`;
//   }
//   cart.innerHTML = cartContent;
//   totaliElementeve.innerHTML = `Total: ${total}€`;
// }
