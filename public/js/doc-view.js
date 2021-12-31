const deleteBtn = document.getElementById('delete');
const deleteForm = document.getElementById('deleteForm');
deleteBtn.addEventListener( 'click', ()=>{
    if(confirm('Delete document ?')){
        deleteForm.submit();
    }
})