
export let bigCart = JSON.parse(localStorage.getItem("cards"));

function setItem() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

export function addToCart(event) {
    const card = event.currentTarget;
    // console.log("card te funksioni add()", card);
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
    updateCart()
    setItem()
    console.log("objektei selektet item pas klikuat", selectedItem);
  }

  export function removeItem(itemId) {
    if(selectedItem[itemId]) {
      selectedItem[itemId].count--;
      if(selectedItem[itemId].count <= 0) {
        delete selectedItem[itemId];
      } // fundi i if-it te dyte
    } // fundi i if-it te pare
    updateCart();
    setItem()
  } // fundi i funksionit removeItem()

  export function updateCart() {
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