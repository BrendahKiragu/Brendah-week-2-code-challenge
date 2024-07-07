document.addEventListener('DOMContentLoaded', function() {

    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const markPurchasedButton = document.getElementById('markPurchasedButton');
    const clearListButton = document.getElementById('clearListButton');
    const itemList = document.getElementById('itemList')

    

//adds an item to list when Add button is clicked
 function addItem() {
        const newItemText = itemInput.value.trim();
        if (newItemText === '') return; // Prevent adding empty items

        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        itemInput.value = ''; // Clear the input field
    }

 //marks all items in the list as  purchased by applying a line-through
function markPurchased() {
        const items = itemList.querySelectorAll('li');
        items.forEach(item => {
        item.style.textDecoration = 'line-through';
        });
    }

//clears all list items when Clear List button is clicked
function clearList() {
    itemList.innerHTML = '';
}

//event listeners to handle click events on the buttons
addItemButton.addEventListener("click", addItem);
markPurchasedButton.addEventListener("click", markPurchased);
clearListButton.addEventListener("click", clearList);

//Enter key adds item
itemInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        addItem();
    }
})

})