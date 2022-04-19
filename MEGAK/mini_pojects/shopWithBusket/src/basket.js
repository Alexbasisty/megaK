class Basket {

    constructor () {
        this.items = this.loadFromLocalStorage() ?? [];
        this.totalValue = 0;
    }

    clear() {
        this.items = [];
        this.saveToLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    } 

    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    }

    getBasketSummary() {
        return this.items
            .map((product, i) => {
                return {
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`,
                    id: i + 1,
                }
            });
    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('basket-items', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        return JSON.parse(localStorage.getItem('basket-items'));
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