const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketLi = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const removeItem = event => {
    const id = Number(event.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}

const createBasketUi = () => {
    basketLi.innerText = '';
    
    for (const { text, id } of basket.getBasketSummary()) {
        

        const listItem = document.createElement('li');
        listItem.innerText = text;
        listItem.addEventListener('click', removeItem);
        listItem.dataset.id = id;
        basketLi.appendChild(listItem);        
    }

    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(2)}zł`;

    buyAllBtn.disabled = basketTotalValue === 0;

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

const buyAllProducts = () => {
    basket.clear();
    createBasketUi();
}

buyAllBtn.addEventListener('click', buyAllProducts);