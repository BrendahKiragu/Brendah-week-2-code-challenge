const itemList = document.getElementById('itemList');
 const addItemButton = document.getElementById('addItemButton');
let items = []; // Array to store shopping list items

// Function to add an item to the list
function addItemToList(item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    itemList.appendChild(listItem);
    items.push(item); // Add item to the array
}

// Event listener for the "Add" button
document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.getElementById('itemInput').value.trim();
    if (newItem) {
        addItemToList(newItem);
        document.getElementById('itemInput').value = ''; // Clear the input field
    }
});

// Event listener for the "Mark Purchased" button
document.getElementById('markPurchasedButton').addEventListener('click', function() {
    items.forEach((item, index) => {
        const listItem = itemList.children[index];
        listItem.classList.toggle('purchased'); // Toggle the 'purchased' class
    });
});

// Event listener for the "Clear List" button
document.getElementById('clearListButton').addEventListener('click', function() {
    itemList.innerHTML = ''; // Clear the list
    items = []; // Clear the items array
});


// Example function to mark an item as purchased manually
document.getElementById('markPurchasedButton').addEventListener('click', function() {
  const selectedItems = document.querySelectorAll('#itemList li:not(.purchased)');
  selectedItems.forEach(function(item) {
    markAsPurchased(item);
    item.classList.add('purchased'); // Add a class to keep track of purchased items
  })
  })

  function updateLocalStorage() {
    const listContainer = document.getElementById('listContainer');
    const listItems = Array.from(listContainer.children).map(li => ({
      text: li.querySelector('.displayText').textContent,
    }));
    localStorage.setItem('myList', JSON.stringify(listItems));
  }