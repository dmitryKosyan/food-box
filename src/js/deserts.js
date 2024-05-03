import { getLocalData, setLocalData } from './modules/storage'
function counter() {
    const productCounter = document.querySelectorAll('.product__counter')
    productCounter.forEach(el => {
        const countMinus = el.querySelector('.product__count-minus')
        const countPlus = el.querySelector('.product__count-plus')
        let counterNumber = el.querySelector('.product__counter-number')
        let countElem = counterNumber.textContent
        countPlus.addEventListener('click', () => {
            counterNumber.textContent = ++countElem
            changePriceFromCounter()

        })
        countMinus.addEventListener('click', () => {
            if (countElem > 1) {
                counterNumber.textContent = --countElem
                changePriceFromCounter()
            }
        })


    })

}
counter()
function description() {
    const disriptionWrap = document.querySelectorAll('.product__discription-wrap')
    disriptionWrap.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const discription = e.target.closest('.product__discription-wrap')
            const discriptionModal = discription.querySelector('.product__discription')
            discriptionModal.style.display = 'block'
            e.stopPropagation();
            window.addEventListener('click', () => {
                if (e.target.closeet !== ('.product__discription')) {
                    discriptionModal.style.display = 'none'
                }
            })
        })
    })
}
description()
function changePriceFromCounter() {
    const priceBlock = document.querySelectorAll('.product__single-variation')
    priceBlock.forEach(priceEl => {

        let productPrice = priceEl.querySelector('.product__price-price')
        productPrice = +productPrice.textContent

        const counter = priceEl.nextElementSibling

        let productCounter = counter.querySelector('.product__counter-number')

        if (productCounter.innerText == '1') {
            priceEl.querySelector('.product__price').textContent = productPrice

        }
        let currentPrice = parseFloat(productCounter.innerText) * productPrice

        currentPrice = `${currentPrice.toFixed(2)}`;

        priceEl.querySelector('.product__price').textContent = currentPrice

    })
}

function buttonAddToCart(event) {
    const addToCart = document.querySelectorAll('.product__counter')

    addToCart.forEach(el => {
        const addTobascket = el.querySelector('.product__add-tocart')

        addTobascket.addEventListener('click', (event) => {
            addTobascket.innerHTML = `Добавлено 
           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2071 6.29289C12.5976 6.68342 12.5976 7.31658 12.2071 7.70711L6.70711 13.2071C6.31658 13.5976 5.68342 13.5976 5.29289 13.2071L2.29289 10.2071C1.90237 9.81658 1.90237 9.18342 2.29289 8.79289C2.68342 8.40237 3.31658 8.40237 3.70711 8.79289L6 11.0858L10.7929 6.29289C11.1834 5.90237 11.8166 5.90237 12.2071 6.29289Z" fill="black"/>
           </svg>`

            buildCart(event)
            cartContent()

        })

    })
}
buttonAddToCart()
function updateCountCart() {
    const card = getLocalData('card');
    const bascketCount = document.querySelector('.header__basket-count');
    bascketCount.textContent = card.length;
}


function buildCart(event) {

    const cards = event.target.closest('.product__card')
    const imgProduct = cards.querySelector('.product__img').getAttribute('src');
    const prodName = cards.querySelector('.product__title').textContent
    const prodPrice = cards.querySelector('.product__price').textContent
    const prodCountEl = cards.querySelector('.product__counter-number').textContent



    // get additive and price them

    const cardObject = {
        imgProduct,
        prodName,
        prodPrice,
        prodCountEl,

    }
    const card = getLocalData('card');

    card.push(cardObject);
    setLocalData('card', card);
    const bascketCount = document.querySelector('.header__basket-count');
    bascketCount.textContent = card.length;

}

function cartContent() {
    const cardPrice = document.querySelector('.total-price-el')
    const cart = document.querySelector('.cart-wrapper-item')

    let card = getLocalData('card')

    if (!card || !card.length) {
        cart.innerHTML = '<h4 class="cart-wrapper-h4">КОРЗИНА ПУСТА</h4>';
        cardPrice.textContent = `0 руб`;
        return;
    }
    let totalPrice = 0
    let cardProducts = ''

    card.forEach((el, index) => {


        let elPrice = parseFloat(el.prodPrice) //* parseFloat(el.prodCountEl)
        totalPrice += elPrice
        cardPrice.innerText = `${totalPrice.toFixed(2)}руб.`

        cardProducts += `
        <div class="cart-wrapper-content" data-index=${index}>
                    <div class="cart-product-img">
                        <img class="img-product-cart" src=${el.imgProduct} />
                    </div>
                    <div class="product-name">
                        <h3 class="cart-product-name">${el.prodName}
                        </h3>
                        <div class="addition"></div>
                            <div class="counter-cart-wrapper">
                            <div class="total-price">${elPrice.toFixed(2)} руб.</div>
                        </div>
                    </div>    
                    <div class="close-button">
                     <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43"
                        viewBox="0 0 43 43" fill="none">
                        <line x1="10.5176" y1="31.9363" x2="30.7566" y2="9.52154"
                         stroke="#ec710c" stroke-width="2" />
                         <line x1="31.6061" y1="32.2923" x2="11.0406" y2="10.1767"
                        stroke="#ec710c" stroke-width="2" />
                     </svg>
                    </div>
                </div> 
        `
    })
    cart.innerHTML = cardProducts
    //butons click to counter
    let quantityButtons = document.querySelectorAll('.product__counter');
    if (quantityButtons) {
        quantityButtons = [...quantityButtons];
        quantityButtons.forEach(button => {
            button.addEventListener('click', counter)
        })
    }
    changePriceFromCounter()

    //delete cards from bascket
    let removeButtons = document.querySelectorAll('.close-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removePosition)
    });

}

function removePosition(event) {

    const cardPosition = event.target.closest('.cart-wrapper-content');
    const cardPositionIndex = cardPosition.dataset.index;
    const card = getLocalData('card');
    card.splice(cardPositionIndex, 1);
    localStorage.setItem('card', JSON.stringify(card))
    cardPosition.textContent = ''
    cartContent();
    updateCountCart()
}
function cartModal() {

    const backSideModal = document.querySelector('.cart-modal')
    const modal = document.querySelector('.cart-wrapper')
    const bascket = document.querySelector('.header__basket-wrap')
    const orderButton = document.querySelector('.order-button')

    bascket.addEventListener('click', (e) => {
        cartContent()
        backSideModal.style.display = 'block';
        modal.style.display = 'block';
        resetAddToCart()

    })
    backSideModal.addEventListener('click', (event) => {
        event.stopPropagation()

        if (event.target == backSideModal) {
            backSideModal.style.display = 'none';
            orderButton.innerHTML = 'оформить заказ'
            orderButton.style.backgroundColor = '#8eaf2b7d'


        }
    })

}
cartModal()
function resetAddToCart() {
    const addTobascket = document.querySelectorAll('.product__add-tocart')
    addTobascket.forEach(el => {
        el.textContent = 'В корзину'

    })
}

function resetCheckboxes() {
    const addProducts = document.querySelectorAll('.product-add-somathing');
    if (addProducts) {
        [...addProducts].forEach(addProduct => {

            addProduct.querySelector('.product-add-checkbox').checked = false;

        });
    }
}
function spinner() {
    const spinnerWheel = document.querySelector('.lds-roller')
    const orderButton = document.querySelector('.order-button')
    setTimeout(() => {
        spinnerWheel.style.display = 'inline-block'
        setTimeout(() => {
            spinnerWheel.style.display = 'none'
            orderButton.innerHTML = 'заказ оформлен'
            orderButton.style.backgroundColor = '#fd9c00'
        }, 4000);
    }, 500);

}
const form = document.getElementById('form')
form.addEventListener('submit', buildOrder)

function buildOrder(event) {
    event.preventDefault(event)

    const products = []
    const name = form.querySelector('[name="name"]')
    const phone = form.querySelector('[name="phone"]')
    const adress = form.querySelector('[name="adress"]')
    const price = document.querySelector('.total-price-el').textContent
    const payment = form.querySelector('[name="payment"]:checked').value;
    products.forEach(prod => {


        const values = {
            name: prod.prodName,
            count: prod.prodCountEl,

            size: prod.productSize,
        }
        products.push(values)
        let additional = ''
        if (prod.additional.length) {
            additional = prod.additional
        }
        products.push(additional)
    });
    spinner()
}