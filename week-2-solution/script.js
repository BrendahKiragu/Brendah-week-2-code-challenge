//targets the DOM elements to be manipulated
const itemList = document.getElementById('itemList'); //ul element for attaching "li" items
const clearListButton = document.getElementById('clearListButton'); //button to clear the list
const markPurchasedButton = document.getElementById('markPurchasedButton');// button for marking items as purchased

let items = []; // Array to store shopping list items

document.addEventListener('DOMContentLoaded', ()=>{
//when clear button is clicked, the list gets cleared
  clearListButton.addEventListener("click", function(){
    itemList.innerHTML = " "        
    })
  }) 

//the eventListener handles form submission
  const form = document.getElementById("addItemForm")
  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    buildList(event.target.itemInput.value)
    event.target.itemInput.value =""
  })

//adds an eventListener to purchase button
 markPurchasedButton.addEventListener("click", () => {
    const listItems = itemList.querySelectorAll('li');
    listItems.forEach((li) => {
      li.classList.toggle('purchased');
    });
  });

//builds a DOM element 'li'
function buildList(text){
    let li = document.createElement('li')
    li.textContent = text

    //this allows individual 'li' items  to be marked purchased
    li.addEventListener('click', ()=>{
        li.classList.toggle('purchased')
    })
    itemList.appendChild(li)
}

//adds the items to the DOM and items array
function addItem(text) {
  buildList(text);                  // Creates and adds the list item to the DOM
  items.push({ text: text });      // Adds the item to the array
}
