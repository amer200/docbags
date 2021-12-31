const itemTypeBtn = document.getElementById('add-option-item');
const itemType = document.getElementById('type');
itemTypeBtn.addEventListener( 'click', ()=>{
    let newCategory = prompt('write the new category');
    itemType.value = newCategory;
})