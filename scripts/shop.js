let product = document.querySelector('.product')
let sliding = document.querySelector('.Slide')


product.addEventListener('mouseenter', ()=>{
    sliding.style.height = sliding.scrollHeight + 'px';
})
product.addEventListener('mouseleave', ()=>{
    sliding.style.height = '0px';
})