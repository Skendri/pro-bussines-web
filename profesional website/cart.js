// cart.js

let selectedItem = {};

const cart = document.getElementById("cart-item");
const totaliElementeve = document.getElementById("totali");

function loadItems() {
  let getItem = JSON.parse(localStorage.getItem("cards"));
  if (getItem) {
    selectedItem = getItem;
  } else {
    selectedItem = {};
  }
  updateCart();
}

function updateCart() {
  cart.innerHTML = "";
  let total = 0;

  for (const itemId in selectedItem) {
    const item = selectedItem[itemId];
    const itemTotal = item.price * item.count;
    total += itemTotal;

    const listItem = document.createElement("div");
    listItem.classList.add("cart-item");

    listItem.innerHTML = `
      <h2>${item.name}</h2>
      <p>Price: ${item.price}€</p>
      <p>Quantity: ${item.count}</p>
      <p>Total: ${itemTotal.toFixed(2)}€</p>
    `;

    cart.appendChild(listItem);
  }

  totaliElementeve.innerHTML = `Total: ${total.toFixed(2)}€`;
}

window.addEventListener("DOMContentLoaded", loadItems);
