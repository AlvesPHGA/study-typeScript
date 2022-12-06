const product: string = 'Laptop';
const price: number = 3000.9;

const car: {
   brand: string;
   doors: number;
} = {
   brand: 'Mercedez',
   doors: 4,
};

function media(name: string, nota01: number, nota02: number) {
   return `${name} -> Media: ` + (nota01 + nota02) / 2;
}

function priceProd(product: { brand: string }) {
   product.brand = `Golf`;
   return product;
}

console.log(priceProd(car));
