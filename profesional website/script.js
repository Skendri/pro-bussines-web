
import { bigCart, addToCart } from "./bigCart.js";
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





const cards = document.querySelectorAll(".box-shop");
const cartButtons = document.querySelectorAll(".cart-btn");
const cart = document.getElementById("cart-item");
const totaliElementeve = document.getElementById("totali");

console.log("ky eshte cards", cards);
console.log("ky eshte per cart", cart);
console.log("ky eshte per", totaliElementeve);
console.log("ky eshte per cart buttons", cartButtons);

// function addToCart(event) {
//   const card = event.currentTarget;
//   console.log("card te funksioni add()", card);
//   const itemId = card.id;
//   const itemName = card.querySelector("h2").innerHTML;
//   const itemPrice = parseFloat(card.querySelector(".price").innerText.replace("€", "lek"));
//   // const itemImage = card.querySelector("img").src;

//   if(selectedItem[itemId]){
//     // selectedItem[itemId].quantity += 1;
//     selectedItem[itemId].count++;
//   } else {
//     selectedItem[itemId] = {
//       name: itemName,
//       price: itemPrice,
//       count: 1
//       // image: itemImage
//     }
//   }
//   updateCart()
//   setItem()
//   console.log("objektei selektet item pas klikuat", selectedItem);
// }

//  function updateCart() {
//   cart.innerHTML = "";
//   let totali = 0;

//   for(const itemId in selectedItem) {
//     const item = selectedItem[itemId];
//     const listItem = document.createElement("li");
//     const quantityContainer = document.createElement("div");
//     const quantityText = document.createElement("span");
//     const addButton = document.createElement("button");
//     const substractButton = document.createElement("button");
//     // const removeButton = document.createElement("button");
//     // const itemTotal = item.price * item.count;
//     // totali += itemTotal;

//     addButton.innerHTML = "+";
//     substractButton.innerHTML = "-";

//     quantityText.innerText = item.count;

//     addButton.addEventListener("click", () => {
//       addItem(itemId);
//     }) // butoni i plusit

//     substractButton.addEventListener("click", () => {
//       removeItem(itemId);
//     }) // butoni i minusit

//     quantityContainer.appendChild(substractButton);
//     quantityContainer.appendChild(quantityText);
//     quantityContainer.appendChild(addButton);


//     listItem.innerHTML = `${item.name} - ${item.price * item.count}€`;
//     listItem.appendChild(quantityContainer);
//     cart.appendChild(listItem);
//     console.log( "this is cart",cart);
//     totali += item.price * item.count;

//   }
//   totaliElementeve.innerHTML = `Totali eshte: ${totali.toFixed(2)}€`;
//   // fundi i loopes FOR
// }

function addItem(itemId) {
  if (selectedItem[itemId]) {
    selectedItem[itemId].count++;
  }
  updateCart();
} // fundi i funksionit addItem()

// function removeItem(itemId) {
//   if(selectedItem[itemId]) {
//     selectedItem[itemId].count--;
//     if(selectedItem[itemId].count <= 0) {
//       delete selectedItem[itemId];
//     } // fundi i if-it te dyte
//   } // fundi i if-it te pare
//   updateCart();
//   setItem()
// } // fundi i funksionit removeItem()

// Add event listeners to cart buttons only
cartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// function setItem() {
//   localStorage.setItem("cards", JSON.stringify(cards));
// }


// let getItem = JSON.parse(localStorage.getItem("cards"));
// console.log("keto jane items qe jane bere get nga local storage" ,getItem);
