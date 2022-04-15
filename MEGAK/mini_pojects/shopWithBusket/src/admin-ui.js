const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUL = document.querySelector('.products-list');

const addProductToShop = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(priceInput.value).toFixed(2);

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
}

addProductForm.addEventListener('submit', addProductToShop);