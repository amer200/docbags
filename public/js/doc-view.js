const deleteBtn = document.getElementById('delete');
const deleteForm = document.getElementById('deleteForm');
const saveL = document.getElementById('d-doc');
deleteBtn.addEventListener('click', () => {
    if (confirm('Delete document ?')) {
        deleteForm.submit();
    }
})

//socail share
const doc = document.getElementById('myDoc');
const twBtn = document.getElementById('tw-link');
const twImg = document.getElementById('tw-img');
const dDoc = document.getElementById('d-doc');
const linkedIn = document.getElementById('linkedin');
function fbs_click() {
    u = doc.src;
    // t=document.title;
    t = doc.getAttribute('alt');
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}
twImg.src = doc.src;
twBtn.href = `https://twitter.com/intent/tweet?url=${doc.src}`;
dDoc.href = doc.src;