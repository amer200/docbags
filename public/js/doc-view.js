const deleteBtn = document.getElementById('delete');
const deleteForm = document.getElementById('deleteForm');
deleteBtn.addEventListener('click', () => {
    if (confirm('Delete document ?')) {
        deleteForm.submit();
    }
})

//socail share
const doc = document.getElementById('myDoc');
const twBtn = document.getElementById('tw-share');
function fbs_click() {
    u = doc.src;
    // t=document.title;
    t = doc.getAttribute('alt');
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}
function twShare(){
    return twBtn.href = `https://twitter.com/share?ref_src=${doc.src}`;
}