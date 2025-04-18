
const cards = document.querySelectorAll(".box");
const cart = document.getElementById("cart-item");
const totaliElementeve = document.getElementById("totali");
const selectedItem = {};

function addToCart(event) {
  const card = event.currentTarget;
  const itemId = card.id;
  const itemName = card.querySelector("h2").innerHTML;
  const itemPrie = parseFloat(card.querySelector("price").innerHTML.replace("€", "lek"));
  // const itemImage = card.querySelector("img").src;

  if(selectedItem[itemId]){
    // selectedItem[itemId].quantity += 1;
    selectedItem[itemId].count++;
  } else {
    selectedItem[itemId] = {
      name: itemName,
      price: itemPrie,
      count: 1
      // image: itemImage
    }
  }


}

function updateCart() {
  cart.innerHTML = "";
  let totali = 0;

  for(itemId in selectedItem) {
    item = selectedItem[id];
    const listItem = document.createElement("li");
    const quantityContainer = document.createElement("div");
    const quantityText = document.createElement("span");
    const addButton = document.createElement("button");
    const substractButton = document.createElement("button");
    // const removeButton = document.createElement("button");
    // const itemTotal = item.price * item.count;
    // totali += itemTotal;

    addButton.innerHTML = "+";
    substractButton.innerHTML = "-";

    quantityText.innerText = item.count;

    addButton.addEventListener("click", () => {
      addItem(itemId);
    }) // butoni i plusit

    substractButton.addEventListener("click", () => {
      removeItem(itemId);
    }) // butoni i minusit

    quantityContainer.appendChild(substractButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(addButton);

    listItem.innerHTML = `${item.name} - ${item.price * item.count}€`;
    listItem.appendChild(quantityContainer);
    cart.appendChild(listItem);
    totali += item.price * item.count;

  }
  totaliElementeve.innerHTML = `Totali eshte: ${totali.toFixed(2)}€`;
  // fundi i loopes FOR
}

function addItem(itemId) {
  if(selectedItem[itemId]) {
    selectedItem[itemId].count++;
  }
  updateCart();
} // fundi i funksionit addItem()

function removeItem(itemId) {
  if(selectedItem[itemId]) {
    selectedItem[itemId].count--;
    if(selectedItem[itemId].count <= 0) {
      delete selectedItem[itemId];
    } // fundi i if-it te dyte
  } // fundi i if-it te pare
  updateCart();
} // fundi i funksionit removeItem()

cards.forEach((card) => {
  card.addEventListener("click", addToCart);
});





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
