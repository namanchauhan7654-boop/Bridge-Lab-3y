"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)
// Product class for E-commerce Admin Panel

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Apply a percentage discount (e.g., 10 means 10%)
  applyDiscount(percent) {
    if (percent < 0 || percent > 100) {
      console.warn("Invalid discount percentage");
      return this.price;
    }
    const discountAmount = this.price * (percent / 100);
    this.price = this.price - discountAmount;
    return this.price;
  }

  // Display product details in a formatted string
  displayDetails() {
    return `ID: ${this.id} | ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
  }
}

// Create multiple product objects
const products = [
  new Product(101, "Wireless Headphones", 2499, "Electronics"),
  new Product(102, "Cotton T-Shirt", 599, "Fashion"),
  new Product(103, "Smart Watch", 8999, "Electronics"),
  new Product(104, "Notebook Set", 299, "Stationery"),
  new Product(105, "Gaming Mouse", 1499, "Electronics"),
  new Product(106, "Water Bottle", 450, "Lifestyle")
];

console.log("===== All Products =====");
products.forEach(p => console.log(p.displayDetails()));

// Apply discount on one product as demo
console.log("\n===== Applying 10% discount on Smart Watch =====");
const smartWatch = products.find(p => p.id === 103);
console.log("Before:", smartWatch.displayDetails());
smartWatch.applyDiscount(10);
console.log("After :", smartWatch.displayDetails());

// Display products with price > 1000 using filter
console.log("\n===== Products with price > 1000 =====");
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));

console.log(`\nTotal expensive products: ${expensiveProducts.length}`);
