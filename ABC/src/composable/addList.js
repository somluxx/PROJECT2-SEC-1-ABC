// ของ mark TodoList

const items = [];


const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");


addButton.addEventListener("click", function() {
  
  const input = itemInput.value;
  
  
  items.push(input);
  
  
  itemInput.value = "";
  
  
  renderList();
});


function renderList() {

  const ul = document.getElementById("itemList");
  

  ul.innerHTML = "";
  
 
  for (var i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(items[i]));
    ul.appendChild(li);
  }
}


renderList();

export { items };
export { renderList };