const burger = document.querySelector('.burger');
const burgerItems = document.querySelector('.burgerItems');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    burgerItems.classList.toggle('active');
})



// let burgercont = document.querySelector('.burgercont');
// let burger = document.querySelector('.burger');
// let burgerItems = document.querySelector('.burgerItems');

// burger.addEventListener('click', ()=>{
//     if(burgercont.classList.contains('open')){
//         burgerItems.style.height = '0px'
//         burgercont.classList.remove('open')
//         }else{
//         burgerItems.style.height = burgerItems.scrollHeight + 'px';
//         burgercont.classList.add('open')
//     }
// })
// rest in peace brother :(( we'll miss u