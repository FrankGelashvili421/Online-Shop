let product = document.querySelector('.product')
let sliding = document.querySelector('.Slide')
let contact = document.querySelector('.contact')
let contactlist = document.querySelector('.contactList')

product.addEventListener('mouseenter', ()=>{
    sliding.style.height = sliding.scrollHeight + 'px';
})
product.addEventListener('mouseleave', ()=>{
    sliding.style.height = '0px';
})

contact.addEventListener('mouseenter', ()=>{
    contactlist.style.height = contactlist.scrollHeight + 'px';
})

contact.addEventListener('mouseleave', ()=>{
    contactlist.style.height = '0px';
});