let modal =document.getElementById('modal');
let openButton=document.getElementById('contact');
let closeButton=document.getElementById('close-modal');

openButton.addEventListener('click', ()=>{modal.classList.remove('hidden')});

closeButton.addEventListener('click',()=>{modal.classList.add('hidden')});

window.addEventListener('click', (event) =>{
if(event.target === modal){modal.classList.add('hidden');
}
});