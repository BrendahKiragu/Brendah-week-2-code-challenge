document.getElementById('addItemButton').addEventListener('click', function(){
  const newItem = document.getElementById('itemInput').value;
  const itemList = document.getElementById('itemList')

  //create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = newItem;
  
  // Append the new item to the listItem
  itemList.appendChild(listItem);
  
  // Clear the input field after adding the item
  document.getElementById('itemInput').value = '';
})