document.addEventListener('DOMContentLoaded', function() {

    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const markPurchasedButton = document.getElementById('markPurchasedButton');
    const clearListButton = document.getElementById('clearListButton');
    const itemList = document.querySelector('ul');

//a fuction to add a new item to the list
 function addItem() {
        const newItemText = itemInput.value.trim();
        if (newItemText === '') return; // Prevent adding empty items

        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        itemInput.value = ''; // Clear the input field
    }

})