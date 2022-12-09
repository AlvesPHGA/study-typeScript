// example 01
class Product {
   name: string;
   price: number;

   constructor(name: string, price: number) {
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
   name: string;
   constructor(name: string) {
      this.name = name;
   }
}

class Game {
   players: number;
   constructor(players: number) {
      this.players = players;
   }
}

function searchProduct(search: string) {
   if (search === 'O Hobbit') return new Book('J. R. R. Tolkien');
   if (search === 'GTA') return new Game(2);
   return null;
}

const product01 = searchProduct('GTA');

// if (product instanceof Game) console.log(product.players);
// if (product instanceof Book) console.log(product.name);

// Exmaple 03 - with extends
class Product02 {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
}

class Laptop extends Product02 {
   price: number;
   constructor(name: string, price: number) {
      super(name);
      this.price = price;
   }
}

class Movel extends Product02 {
   lugar: number;
   constructor(name: string, lugar: number) {
      super(name);
      this.lugar = lugar;
   }
}

function searchProduct02(search: string) {
   if (search === 'Dell') return new Laptop('Inspiron', 2000.99);
   if (search === 'Sofa') return new Movel('Sofa Retratel', 4);
   return null;
}

const product02 = searchProduct02('Dell');

if (product02 instanceof Laptop) console.log(product02.price);
