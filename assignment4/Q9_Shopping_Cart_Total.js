"use strict";

// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = []; // { name, price, quantity }
  }

  // Add an item to the cart
  addItem(name, price, quantity = 1) {
    this.items.push({ name, price, quantity });
    console.log(`Added: ${name} x${quantity} @ ₹${price}`);
  }

  // Calculate total (before discount)
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Apply coupon using RegExp validation
  // Valid formats: SAVE20, DISC10, SAVE15, DISC25, etc.
  applyCoupon(couponCode) {
    const couponRegex = /^(SAVE|DISC)(\d{1,2})$/i;

    if (!couponRegex.test(couponCode)) {
      console.log(`✗ Invalid coupon format: "${couponCode}". Expected SAVE20 or DISC10 style.`);
      return this.getTotal();
    }

    const match = couponCode.toUpperCase().match(couponRegex);
    const percent = Number(match[2]);

    if (percent <= 0 || percent > 50) {
      console.log("✗ Discount percent must be between 1 and 50");
      return this.getTotal();
    }

    const total = this.getTotal();
    const discount = total * (percent / 100);
    const finalTotal = total - discount;

    console.log(`✓ Coupon "${couponCode.toUpperCase()}" applied → ${percent}% off`);
    console.log(`  Original Total : ₹${total.toFixed(2)}`);
    console.log(`  Discount       : ₹${discount.toFixed(2)}`);
    console.log(`  Final Total    : ₹${finalTotal.toFixed(2)}`);

    return finalTotal;
  }

  // Display cart contents
  showCart() {
    console.log("\n===== Cart Contents =====");
    this.items.forEach(item => {
      console.log(`${item.name}  × ${item.quantity}  = ₹${(item.price * item.quantity).toFixed(2)}`);
    });
    console.log(`Subtotal: ₹${this.getTotal().toFixed(2)}`);
  }
}

// ===== Demo =====
const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("USB Cable", 250, 3);

cart.showCart();

console.log("\n===== Testing Coupons =====");
cart.applyCoupon("SAVE20");   // valid
console.log("---");
cart.applyCoupon("DISC10");   // valid
console.log("---");
cart.applyCoupon("INVALID");  // invalid format
console.log("---");
cart.applyCoupon("SAVE5");    // valid
