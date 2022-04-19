const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUL = document.querySelector('.products-list');

const saveProductsToLocalStorage = (name, price) => {
    const oldProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    oldProductsList.push({ name, price });
    localStorage.setItem('shop-products', JSON.stringify(oldProductsList));
};

const addProductToShop = (name, price) => {
    const newLi = document.createElement('li');
    
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` - ${price} `);
    
    const newButton = document.createElement('button');
    newButton.classList.add('btn-buy-product');
    newButton.dataset.name = name;
    newButton.dataset.price = String(price);
    newButton.innerText = 'Kup';
    newButton.addEventListener('click', addProductToBasket);
    
    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newButton);
    productsUL.appendChild(newLi);
};


const loadProductsFromLocalStorage = () => {
    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];

    for (const { name, price } of productsList) {
        addProductToShop(name, price);
    };
}

const handleAddProductFormSubmit = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(priceInput.value).toFixed(2);

    addProductToShop(name, price);
    saveProductsToLocalStorage(name, price);
}

addProductForm.addEventListener('submit', handleAddProductFormSubmit);
loadProductsFromLocalStorage();