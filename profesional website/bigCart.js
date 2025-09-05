export let bigCart = JSON.parse(localStorage.getItem("cards"));

let selectedItem = bigCart || {};

function setItem() {
  localStorage.setItem("cards", JSON.stringify(selectedItem));
}

export function addToCart(event) {
  // Stop event propagation to prevent triggering on the entire card
  event.stopPropagation();

  const card = event.currentTarget.closest('.box-shop');
  const itemId = card.id;
  const itemName = card.querySelector("h2") ? card.querySelector("h2").innerHTML : null;
  const priceText = card.querySelector(".price") ? card.querySelector(".price").innerText : null;
  const itemPrice = priceText ? parseFloat(priceText.replace("$", "")) : null;
  const itemImage = card.querySelector("img") ? card.querySelector("img").src : null;

  if (!itemId || !itemName || itemPrice === null) {
    console.warn("addToCart: Missing itemId, itemName or itemPrice, skipping add", { itemId, itemName, itemPrice });
    return;
  }

  if (selectedItem[itemId]) {
    selectedItem[itemId].count++;
  } else {
    selectedItem[itemId] = {
      name: itemName,
      price: itemPrice,
      count: 1,
      image: itemImage
    }
  }
  setItem();
  updateCart();
  console.log("objektei selektet item pas klikuat", selectedItem);
}

export function removeItem(itemId) {
  if (selectedItem[itemId]) {
    selectedItem[itemId].count--;
    if (selectedItem[itemId].count <= 0) {
      delete selectedItem[itemId];
    }
  }
  updateCart();
  setItem();
}

export function updateCart() {
  const cart = document.getElementById("cart-item");
  const totaliElementeve = document.getElementById("totali");

  if (!cart || !totaliElementeve) {
    console.warn("Cart elements not found");
    return;
  }

  cart.innerHTML = "";
  let totali = 0;

  for (const itemId in selectedItem) {
    const item = selectedItem[itemId];
    const listItem = document.createElement("div");
    listItem.classList.add("cart-item");
    const quantityContainer = document.createElement("div");
    const quantityText = document.createElement("span");
    const addButton = document.createElement("button");
    const substractButton = document.createElement("button");

    addButton.innerHTML = "+";
    substractButton.innerHTML = "-";

    quantityText.innerText = item.count;

    addButton.addEventListener("click", () => {
      addItem(itemId);
    });

    substractButton.addEventListener("click", () => {
      removeItem(itemId);
    });

    quantityContainer.appendChild(substractButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(addButton);

    listItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <div class="item-details">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Total: $${(item.price * item.count).toFixed(2)}</p>
          </div>
        `;
    listItem.appendChild(quantityContainer);
    cart.appendChild(listItem);
    totali += item.price * item.count;
  }
  totaliElementeve.innerHTML = `Total: $${totali.toFixed(2)}`;
}

export function addItem(itemId) {
  if (selectedItem[itemId]) {
    selectedItem[itemId].count++;
  }
  setItem();
  updateCart();
}
