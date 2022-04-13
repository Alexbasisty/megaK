class Basket {

    constructor () {
        this.items = [];
        this.totalValue = 0;
    }

    add(item) {
        this.items.push(item);
    } 

    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    }

    showBasket() {
        this.items
            .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`)
            .forEach(item => console.log(item))
    }

    remove(no) {
        this.items.splice(no - 1, 1)
    }
}

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}

const shopBasket = new Basket();

const oranges = new Product('Pomarańcze LUZ', 7.55);
const cucumbers = new Product('Ogórek duży', 8.20);

shopBasket.add(cucumbers);
shopBasket.add(cucumbers);
shopBasket.add(oranges);

console.log(shopBasket.getTotalValue());
shopBasket.remove(2);
shopBasket.showBasket();

console.log(shopBasket.getTotalValue());