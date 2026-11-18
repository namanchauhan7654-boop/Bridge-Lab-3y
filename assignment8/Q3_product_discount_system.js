// Q3: Product constructor and shared prototype discount method

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// One shared method applies a discount to any Product object.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 2000);

console.log(`${product1.name}: ₹${product1.applyDiscount(10).toFixed(2)}`);
console.log(`${product2.name}: ₹${product2.applyDiscount(20).toFixed(2)}`);
console.log(`${product3.name}: ₹${product3.applyDiscount(15).toFixed(2)}`);

// Abstraction: the user calls applyDiscount(percent) without repeating
// the discount calculation each time. The method hides that calculation.
