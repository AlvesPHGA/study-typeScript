"use strict";
const product = 'Laptop';
const price = 3000.9;
const car = {
    brand: 'Mercedez',
    doors: 4,
};
function media(name, nota01, nota02) {
    return `${name} -> Media: ` + (nota01 + nota02) / 2;
}
function priceProd(product) {
    product.brand = `Golf`;
    return product;
}
console.log(priceProd(car));
