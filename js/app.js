// Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// set subtotal and tax
let subbtotal = 0
let tax = .07

// grab the menu types
const menuTypes = [
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides'
]

// create menu items; array of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: 'salmondip.jpeg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: 'onionrings.jpeg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guac.jpeg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke dip served with chips',
        imgUrl: 'spinachartichoke.jpeg',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: 'chicken_sandwich.jpeg',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: 'veggie_burger.jpeg',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'salmon',
        desc: 'atlantic salmon served over grits with a side of spinach',
        imgUrl: 'salmon.jpeg',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'pizza',
        desc: 'pepperoni and tomato pizza. 6 slices',
        imgUrl: 'pizza.jpeg',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squeezed lemonade',
        imgUrl: 'lemonade.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'beer',
        desc: 'choose from our domestic and imported slection',
        imgUrl: 'beer.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'wine',
        desc: 'choose from our selection of wines served by the glass',
        imgUrl: 'wine.jpeg',
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'sweet tea',
        imgUrl: 'tea.jpeg',
        price: 4.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'tiaramisu',
        desc: 'layered sponge cake',
        imgUrl: 'tiramisu.jpeg',
        price: 6.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'brownie',
        desc: 'chocolate brownie served with ice cream',
        imgUrl: 'brownies.jpeg',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'chocolate chip cookies',
        desc: 'three chocolate chip cookies',
        imgUrl: 'cookies.jpeg',
        price: 5.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'apple pie',
        desc: 'slice of fresh store-made apple pie',
        imgUrl: 'apple_pie.jpeg',
        price: 8.99,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'french fries',
        desc: 'basket of curly fries',
        imgUrl: 'fries.jpeg',
        price: 3.99,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'sweet potato fries',
        desc: 'home-cut sweet potato fries topped with cinammon and sugar',
        imgUrl: 'sweet_potato_fries.jpeg',
        price: 5.99,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'veggie medley',
        desc: 'mixed vegetables',
        imgUrl: 'veggie_medley.jpeg',
        price: 4.99,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'side salad',
        desc: 'house salad with choice of ranch, caesar, italian dressing or vinaigrette',
        imgUrl: 'house_salad.jpeg',
        price: 3.99,
        qty: 0
    }
]

// confirm Button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('click')
})

// load the menu items
// make rows
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[1]}Row`)
    console.log(menuDivs[i])
}
// grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

// build cols and cards
menuItems.forEach(item => {
    // do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
    <img src="images/${item.imgUrl} alt="${item.desc}" class="img-fluid menu-image card-image-top" />
    <div class="card-body>
        <h4 class="card-title text-capitalize item-item">${item.item}</h4>
        <p class="card-text text-uppercase item-desc">${item.desc}</p>
    </div>
    `
})