// example 01
class Book {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   // author() {
   //    const nameAuthor = 'Richard Goes';
   //    return nameAuthor;
   // }

   // price() {
   //    const price = 'R$ 400';
   //    return price;
   // }
}

class Game {
   player: number;

   constructor(player: number) {
      this.player = player;
   }

   company() {
      const nameCompany = 'Giants';
      return nameCompany;
   }

   // price() {
   //    const price = 'R$ 250';
   //    return price;
   // }
}

function searchProduct(search: string) {
   if (search === 'GTA') {
      return new Game(1);
   } else if (search === 'Jogos Vorazes') {
      return new Book('Jonnas Day');
   }
   return null;
}

const product = searchProduct('GTA');

if (product instanceof Game) console.log(product.player);
