
let shavingItems = [{
    item:'Shave Brush',
    new:true,
    price: '15$',
    image: '../images/shave brush.webp',
},
{
    item:'Shave Blade',
    new:true,
    price: '36$',
    image: '../images/shave blade.webp',
},
{
    item:'Electric Razor "Panasonic Arc5 LV9 "', 
    new:true,
    price: '250$',
    image: '../images/electric razor.jpg',
},
{
    item:'Shave Razor',
    new:true,
    price: '5$',
    image: '../images/razor.webp'
},
];

let MansCare = [{
    item:'facewash',
    price:'15$',
    image: '../images/facewash.webp',
},
{
    item:'hairbalm',
    price:'45$',
    image: ' ../images/blumaan hair balm.webp',
},
{
    item:'shampoo',
    price:'15$',
    image: '../images/shampoo.webp'
},
{
    item:'Beardbalm',
    price:'20$',
    image: '../images/beard balm.webp',
},
{
    item:'shavegel',
    price:'15$',
    image: '../images/shave gel.jpg'
},
{
    item:'shave cream',
    price:'24$',
    image:'../images/shave cream.webp'
},
{
    item:'shave foam',
    price:'10$',
    image:'../images/shave foam.jpg'
},
{
    item:'hair wax',
    price:'35$',
    image: '../images/hair wax.jpg'
},
];

let card = (shaveitem) => {
    let shavingcard = document.querySelector('.shaving');

    shaveitem.forEach(element => {
        let cardContainer = document.createElement('div');
        cardContainer.className = 'cardCont';
        cardContainer.innerHTML = `
            <div class="img"><img class="images" src="${element.image}"></div>
            <div class="mainCont">
                <div class="shaveitems">
                    <div class="btnCont">
                        <div class="items">${element.item}</div>
                        <div class="prices">${element.price}</div>
                        <button class="buybtn">buy</button>
                    </div>
                </div>
            </div>
        `;
        shavingcard.appendChild(cardContainer);
    });
};


card(shavingItems);

let cards = (MansCare) =>{
    let mensCareCard = document.querySelector('.manscare');

    MansCare.forEach(element =>{
      let cardcont = document.createElement('div');
      cardcont.className = 'carecont';
      cardcont.innerHTML = `
      <div class="img2"><img class="images" src="${element.image}"></div>
            <div class="container">
                <div class="CareItem">
                    <div class="btnCont">
                        <div class="items">${element.item}</div>
                        <div class="prices">${element.price}</div>
                        <button class="buybtn">buy</button>
                    </div>
                </div>
            </div>
      `;
      mensCareCard.appendChild(cardcont);
    });
};

cards(MansCare);