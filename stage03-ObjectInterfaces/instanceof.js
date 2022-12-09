"use strict";
// example 01
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    priceReal() {
        return `R$ ${this.price}`;
    }
}
const feed = new Product('Laptop', 2000);
// example 02 - whit instaceof
class Book {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Game {
    players;
    constructor(players) {
        this.players = players;
    }
}
function searchProduct(search) {
    if (search === 'O Hobbit')
        return new Book('J. R. R. Tolkien');
    if (search === 'GTA')
        return new Game(2);
    return null;
}
const product01 = searchProduct('GTA');
// if (product instanceof Game) console.log(product.players);
// if (product instanceof Book) console.log(product.name);
// Exmaple 03 - with extends
class Product02 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Laptop extends Product02 {
    price;
    constructor(name, price) {
        super(name);
        this.price = price;
    }
}
class Movel extends Product02 {
    lugar;
    constructor(name, lugar) {
        super(name);
        this.lugar = lugar;
    }
}
function searchProduct02(search) {
    if (search === 'Dell')
        return new Laptop('Inspiron', 2000.99);
    if (search === 'Sofa')
        return new Movel('Sofa Retratel', 4);
    return null;
}
const product02 = searchProduct02('Dell');
// if (product02 instanceof Laptop) console.log(product02.price);
// exercise
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement)
    link.href = link.href.replace('http://', 'https://');
