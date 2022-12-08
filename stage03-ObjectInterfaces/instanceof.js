"use strict";
// example 01
class Book {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Game {
    player;
    constructor(player) {
        this.player = player;
    }
    company() {
        const nameCompany = 'Giants';
        return nameCompany;
    }
}
function searchProduct(search) {
    if (search === 'GTA') {
        return new Game(1);
    }
    else if (search === 'Jogos Vorazes') {
        return new Book('Jonnas Day');
    }
    return null;
}
const product = searchProduct('GTA');
if (product instanceof Game)
    console.log(product.player);
