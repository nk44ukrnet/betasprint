window.addEventListener('DOMContentLoaded', () => {
    let burgerBtn = document.querySelector('.header__burger'),
        headerNav = document.querySelector('.header__nav');
    if (burgerBtn && headerNav) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            headerNav.classList.add('active');
        })
        document.body.addEventListener('click', (e) =>{
            if(!e.target.closest('.header__nav')) {
                headerNav.classList.remove('active');
            }
        });
    }

    //product item
    let productItem = document.querySelectorAll('.products__item');
    if(productItem.length) {
        if(productItem.length > 4) {
            for (let i = 0; i < productItem.length; i++) {
                if(i < 4) {
                    continue;
                } else {
                    productItem[i].hidden = true;
                }
            }
        }
    }
    let productsLoadBtn = document.querySelector('.products__load-button');
    if(productsLoadBtn && productItem.length > 4) {
        productsLoadBtn.addEventListener('click', function (e) {
            productItem.forEach(item =>{
                item.hidden = false;
            })
        })
    }


});