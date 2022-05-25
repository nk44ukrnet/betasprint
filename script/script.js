window.addEventListener('DOMContentLoaded', () => {
    let burgerBtn = document.querySelector('.header__burger'),
        headerNav = document.querySelector('.header__nav');
    if (burgerBtn && headerNav) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            headerNav.classList.add('active');
        })
        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('.header__nav')) {
                headerNav.classList.remove('active');
            }
        });
    }

    //product item
    let productItem = document.querySelectorAll('.products__item');
    if (productItem.length) {
        if (productItem.length > 4) {
            for (let i = 0; i < productItem.length; i++) {
                if (i < 4) {
                    continue;
                } else {
                    productItem[i].hidden = true;
                }
            }
        }
    }
    let productsLoadBtn = document.querySelector('.products__load-button');
    if (productsLoadBtn && productItem.length > 4) {
        productsLoadBtn.addEventListener('click', function (e) {
            productItem.forEach(item => {
                item.hidden = false;
            })
        })
    }

    //cart modal
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })

    //cart
    let cartBtn = document.querySelectorAll('.product__btn'),
        cartCounter = document.querySelector('.header__cart span'),
        cartContent = document.querySelector('#cartContent');
    if (cartBtn && cartCounter && cartContent) {
        let cart = [];


        cartBtn.forEach(btn =>{
            btn.addEventListener('click', function () {
                if(!btn.classList.contains('button-disabled')) {
                    let container = btn.closest('.product');
                    let title = container.querySelector('.product__title').textContent;
                    let price = container.querySelector('.price').textContent;
                    upDateCart({title, price: parseFloat(price)})
                }
            })
        })

        function upDateCart({title, price}) {
            if(title && price) {
                cart.push({
                    title,
                    price
                })
            }
            cartCounter.innerHTML = cart.length;
            cartContent.innerHTML = ``;
            cart.forEach(item=>{
                cartContent.innerHTML += `<p>${item.title} (${item.price}.00 kr)</p>`
            })
            myModal.show();
        }
    }
});