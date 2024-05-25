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

let chosenData;

const card = (shaveItems) => {
    const shavingSide = document.querySelector('.cards');
    shavingSide.innerHTML = '';
    shaveItems.forEach(element => {
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
chosenData = shavingItems.concat(MansCare)
card(chosenData);

document.getElementById('selector').addEventListener('change', function(){
    chosenData = [];
    let selected = this.value;
    if(selected === 'ShavingAccesories'){
        chosenData = shavingItems;
    }else if (selected === 'MansCare'){
        chosenData = MansCare;
    }else{
        let allData = shavingItems.concat(MansCare);
        chosenData = allData;
    }
    card(chosenData);
});
