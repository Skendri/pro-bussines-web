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
  if (!cart || !totaliElementeve) {
    console.warn("Cart elements not found");
    return;
  }

  cart.innerHTML = "";
  let total = 0;

  for (const itemId in selectedItem) {
    const item = selectedItem[itemId];
    const itemTotal = item.price * item.count;
    total += itemTotal;

    const listItem = document.createElement("div");
    listItem.classList.add("cart-item");

    listItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-details">
        <h2>${item.name}</h2>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.count}</p>
        <p>Total: $${itemTotal.toFixed(2)}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="removeItem('${itemId}')">-</button>
        <span>${item.count}</span>
        <button onclick="addItem('${itemId}')">+</button>
      </div>
    `;

    cart.appendChild(listItem);
  }

  totaliElementeve.innerHTML = `Total: $${total.toFixed(2)}`;
}

function addItem(itemId) {
  if (selectedItem[itemId]) {
    selectedItem[itemId].count++;
  }
  localStorage.setItem("cards", JSON.stringify(selectedItem));
  updateCart();
}

function removeItem(itemId) {
  if (selectedItem[itemId]) {
    selectedItem[itemId].count--;
    if (selectedItem[itemId].count <= 0) {
      delete selectedItem[itemId];
    }
  }
  localStorage.setItem("cards", JSON.stringify(selectedItem));
  updateCart();
}

window.addEventListener("DOMContentLoaded", loadItems);
