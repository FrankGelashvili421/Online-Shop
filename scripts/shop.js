const shavingItems = [{
    item:'Shave Brush',
    new:true,
    price: '15$',
    image: './images/shave brush.webp',
},
{
    item:'Shave Blade',
    new:true,
    price: '36$',
    image: './images/shave blade.webp',
},
{
    item:'Electric Razor "Panasonic Arc5 LV9 "', 
    new:true,
    price: '250$',
    image: './images/electric razor.jpg',
},
{
    item:'Shave Razor',
    new:true,
    price: '5$',
    image: './images/razor.webp'
},
];

const MansCare = [{
    item:'facewash',
    price:'15$',
    image: './images/facewash.webp',
},
{
    item:'hairbalm',
    price:'45$',
    image: './images/blumaan hair balm.webp',
},
{
    item:'shampoo',
    price:'15$',
    image: './images/shampoo.webp'
},
{
    item:'Beardbalm',
    price:'20$',
    image: './images/beard balm.webp',
},
{
    item:'shavegel',
    price:'15$',
    image: './images/shave gel.jpg'
},
{
    item:'shave cream',
    price:'24$',
    image:'./images/shave cream.webp'
},
{
    item:'shave foam',
    price:'10$',
    image:'./images/shave foam.jpg'
},
{
    item:'hair wax',
    price:'35$',
    image: './images/hair wax.jpg'
},
];

const selector = document.getElementById('#selector');
const all = document.querySelector('.all');
const shavingaccesories = document.querySelector('.ShavingAccesories');
const manscare = document.querySelector('.MansCare');


const card = (shaveitem) => {
    const shavingSide = document.querySelector('.cards');

    shaveitem.forEach(element => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'cardCont';
        cardContainer.innerHTML = `
            <div class="container">
                <img class="images" src="${element.image}">
                <div class="items">
                 <div class="item">${element.item}</div>
                    <div class="btnCont">
                        <div class="price">${element.price}</div>
                        <button class="buybtn">buy</button>
                    </div>
                </div>
            </div>
        `;
        shavingSide.appendChild(cardContainer);
    });
};


card(shavingItems);

const cards = (MansCare) =>{
    const MansCareSide = document.querySelector('.cards');

    MansCare.forEach(element =>{
      const cardcont = document.createElement('div');
      cardcont.className = 'cardcont';
      cardcont.innerHTML = `
        <div class="container">
            <img class="images" src="${element.image}">
            <div class="items">
             <div class="item">${element.item}</div>
                <div class="btnCont">
                    <div class="price">${element.price}</div>
                    <button class="buybtn">buy</button>
                </div>
            </div>
        </div>
      `;
      MansCareSide.appendChild(cardcont);
    });
};

cards(MansCare);