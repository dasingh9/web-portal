/*function Product(name, price) {
 this.name = name;
 this.price = price;
 this.salePrice = price * .9; // 10% off
}
function Food(name, price) {
 Product.call(this, name, price); // inherits from Product with custom context
 this.category = 'food';
}
const cheese = new Food('cheese', 5);
console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);
*/

// Base class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.salePrice = price * 0.9; // 10% off
  }
}

class Food extends Product {
  constructor(name, price) {
    super(name, price); // calls Product's constructor
    this.category = 'food';
  }
}

const cheese = new Food('cheese', 5);
console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);
