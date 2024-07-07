// document.addEventListener('DOMContentLoaded', function() {

//     const itemInput = document.getElementById('itemInput');
//     const addItemButton = document.getElementById('addItemButton');
//     const markPurchasedButton = document.getElementById('markPurchasedButton');
//     const clearListButton = document.getElementById('clearListButton');
//     const itemList = document.getElementById('itemList')

// //now we create an array to store our items
// let shoppingList = [];

// //renders the shopping list items
// function renderItems() {
//      itemList.innerHTML = '';
//      shoppingList.forEach((item, index) => {
//          const option = document.createElement('option');
//          option.textContent = item.text;

//          if (item.purchased) {
//              option.style.textDecoration = 'line-through';
//          }

//          option.addEventListener('click', ()=>togglePurchased(index));  // Use index as the value to identify the option
//          itemList.appendChild(option);
//      });
//     }

// //Adds a new item to the array and updates the DOM
//  function addItem() {
//         const newItemText = itemInput.value.trim();
//         if (newItemText === '') return; // Prevent adding empty items

//         shoppingList.push({text: newItemText, purchased: false})
//         itemInput.value = ''; //clears the input field
//         renderItems(); //updates the DOM
//     }

// function togglePurchased(index){
//     shoppingList[index].purchased = !shoppingList[index].purchased;
//     renderItems();
// }

// function markAllPurchased(){
//     shoppingList.forEach(item=>item.purchased = true);
//     renderItems();
// }

// //clears all list items when Clear List button is clicked
// function clearList() {
//     shoppingList= [];
//     renderItems(); //updates the DOM
// }

// //event listeners to handle click events on the buttons
// addItemButton.addEventListener("click", addItem);
// markPurchasedButton.addEventListener("click", markAllPurchased);
// clearListButton.addEventListener("click", clearList);

// Enter key adds item
// itemInput.addEventListener('keypress', function(event){
//     if (event.key === 'Enter'){
//         addItem();
//     }
// })
// initial render
// renderItems();
// })

