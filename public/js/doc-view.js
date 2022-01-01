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
const whatsApp = document.getElementById('whats-app');
const whatsForm = document.getElementById('whatsForm');

function fbs_click() {
    u = doc.src;
    // t=document.title;
    t = doc.getAttribute('alt');
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
}
twImg.src = doc.src;
twBtn.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(doc.src.trim())}`;
dDoc.href = doc.src;

function whatsAppShare() {
    const number = prompt('type the number');
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(doc.src.trim())}`, '_blank');
}
// whatsApp.href = `https://api.whatsapp.com/send?phone=${number}&text=${doc.src}`;