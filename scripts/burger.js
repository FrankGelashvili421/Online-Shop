let burgercont = document.querySelector('.burgercont');
let burger = document.querySelector('.burger');
let burgerItems = document.querySelector('.burgerItems');

burger.addEventListener('click', ()=>{
    if(burgercont.classList.contains('active')){
        burgerItems.style.height = '0px'
        burgercont.classList.remove('active')
        }else{
        burgerItems.style.height = burgerItems.scrollHeight + 'px';
        burgercont.classList.add('active')
    }
})