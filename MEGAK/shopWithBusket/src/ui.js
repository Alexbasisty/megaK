const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketLi = document.querySelector('.basket-list');

const createBasketUi = () => {
    basketLi.innerText = '';
    
    for (const oneProductInfo of basket.getBasketSummary()) {
        const listItem = document.createElement('li');
        listItem.innerText = oneProductInfo;
        basketLi.appendChild(listItem);        
    }
}

const addProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    const newProduct = new Product(name, price);
    basket.add(newProduct);

    createBasketUi();
    basket.getBasketSummary()
};

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToBasket);
};