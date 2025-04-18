
// import {cart, addToCart } from "./cart.js";
// import { allFruits } from "./cart.js";

//  swipers

let swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
}

/* 
let swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/

// function updateCart() {
//   let cartQuantity = 0;
//   cart.forEach(cartItem => {
//     cartQuantity += cartQuantity.quantity
//   });
// }


//  document.getElementById("butoniAdd").addEventListener("click", addToCart);

// function add() {
//   // const productName = "Banana";
//   // const productPrice = 2.5;
//   addToCart(productName, productPrice);
// }

// butoni.addEventListener("click", () => {
//   addToCart(productName, productPrice);
//   // const productId = productId;
//   // addToCart(productId);
// });


const cards = document.querySelectorAll(".box");
const cart = document.getElementById("cart-item");
const totaliElementeve = document.getElementById("totali");
const selectedItem = {};

function addToCart(event) {
  const card = event.currentTarget;
  console.log("card te funksioni add()", card);
  const itemId = card.id;
  const itemName = card.querySelector("h2").innerHTML;
  const itemPrice = parseFloat(card.querySelector(".price").innerText.replace("€", "lek"));
  // const itemImage = card.querySelector("img").src;

  if(selectedItem[itemId]){
    // selectedItem[itemId].quantity += 1;
    selectedItem[itemId].count++;
  } else {
    selectedItem[itemId] = {
      name: itemName,
      price: itemPrice,
      count: 1
      // image: itemImage
    }
  }


}

function updateCart() {
  cart.innerHTML = "";
  let totali = 0;

  for(const itemId in selectedItem) {
    const item = selectedItem[itemId];
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
    console.log( "this is cart",cart);
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

cart.addEventListener("click", () => {
  let elementi = document.createElement("div")
  let paragrafi = document.createElement("p");
  paragrafi.innerHTML = "Hello World!"
  elementi.appendChild(paragrafi);
  console.log("this is cart",cart);
  cart.appendChild(elementi);
  document.body.append(elementi);
})
