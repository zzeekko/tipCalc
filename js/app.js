// Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// set subtotal and tax
let subtotal = 0
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
        imgUrl: 'salmondip.jpg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: 'onionrings.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guac.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke dip served with chips',
        imgUrl: 'spinachartichoke.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: 'chicken_sandwich.jpg',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: 'veggie_burger.jpg',
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
        imgUrl: 'pizza.jpg',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squeezed lemonade',
        imgUrl: 'lemonade.jpg',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'beer',
        desc: 'choose from our domestic and imported slection',
        imgUrl: 'beer.jpg',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'wine',
        desc: 'choose from our selection of wines served by the glass',
        imgUrl: 'wine.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'sweet tea',
        imgUrl: 'tea.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'tiaramisu',
        desc: 'layered sponge cake',
        imgUrl: 'tiramisu.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'brownie',
        desc: 'chocolate brownie served with ice cream',
        imgUrl: 'brownies.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'chocolate chip cookies',
        desc: 'three chocolate chip cookies',
        imgUrl: 'cookies.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'apple pie',
        desc: 'slice of fresh store-made apple pie',
        imgUrl: 'apple_pie.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'french fries',
        desc: 'basket of curly fries',
        imgUrl: 'fries.jpg',
        price: 3.99,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'sweet potato fries',
        desc: 'home-cut sweet potato fries topped with cinammon and sugar',
        imgUrl: 'sweet_potato_fries.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'veggie medley',
        desc: 'mixed vegetables',
        imgUrl: 'veggie_medley.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'side salad',
        desc: 'house salad with choice of ranch, caesar, italian dressing or vinaigrette',
        imgUrl: 'house_salad.jpg',
        price: 3.99,
        qty: 0
    }
]

// confirm Button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    getTotal()
})

//getTotal()
const getTotal =()=> {

    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal *tipAmt) 

    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : 
        receiptTip + subtotal + taxTotal
    
    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

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
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
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
    card.classList.add('card', 'h-100')

    card.innerHTML = `
    <img src="images/${item.imgUrl} alt="${item.desc}" class="img-fluid menu-image card-image-top" />
    <div class="card-body>
        <h4 class="card-title text-capitalize item-item">${item.item}</h4>
        <p class="card-text text-uppercase item-desc">${item.desc}</p>
    </div>
    <footer class="card-footer">
        <p class="card-text item-price">$${item.price}</p>
        <div class="buttons-div d-flex justify-content-around">
            <button 
                class="btn btn-danger cart-btn text-capitalize"
                id="Btn${item.id}"
                data-id="${item.id}"
                data-price="${item.price}"
                data-qty="${item.qty}"
                data-item="${item.item}"
            >add to cart</button>
            <div class="qty-div">
                <button
                    class="btn btn-primary btn-subtract"
                    id="btnSubtract${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}"
                > - </button>
                <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                <button
                    class="btn btn-primary btn-add"
                    id="btnAdd${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}"
                > + </button>
            </div>
        </div>
    </footer>`

    column.appendChild(card)

    // switch (menuItems.type)
    switch (item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break
        case 'entrees':
            entreesRow.appendChild(column)
            break
        case 'drinks':
            drinksRow.appendChild(column)
            break
        case 'desserts':
            dessertsRow.appendChild(column)
            break
        case 'sides':
            sidesRow.appendChild(column)
            break
        default:
            console.log('Error: menu type not listed')
            break
    }
})

// cart buttons
const cartButtons = document.querySelectorAll('.cart-btn')

// console.log(cartButtons);
cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }

        console.log(button)

        if (button.getAttribute('data-qty') > 0) {
            addItems(price, qty, item, id)
        }
    })
})

// addItems()
let receiptArray = []

const addItems =(price, qty, item, id)=> {

    let itemObj = {
        id: id,
        item: item,
        qty: qty,
        price: price,
        itemTotal: qty * price
    }

    receiptArray = [...receiptArray, itemObj]

    //makeReceipt
    makeReceipt(itemObj, receipt)

    subtotal+= itemObj.itemTotal
    cartSubtotal.innerText = subtotal.toFixed(2)
}

// makeReceipt()
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.setAttribute('id', `qty${obj.id}`)
    receiptQty.innerText = obj.qty
    
    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    el.appendChild(tableRow)

}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for(let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id === btnId && menuItems[i].qty > 0) {
                menuItems[i].qty-= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for(let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id == btnId && menuItems[i].qty < 20 && cartButtons[i].dataset.id == btnId) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

