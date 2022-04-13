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