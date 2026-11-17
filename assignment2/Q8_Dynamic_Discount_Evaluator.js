// Q8. Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

console.log("Original Cart:");
cart.forEach(p => console.log(`  ${p.item} (${p.category}): ₹${p.price}`));

// Calculate total after category discounts using reduce + conditionals
let totalAfterCategoryDiscount = cart.reduce((sum, product) => {
  let price = product.price;

  if (product.category === "electronics") {
    price = price * 0.9; // 10% discount
  } else if (product.category === "fashion") {
    price = price * 0.95; // 5% discount
  }
  // education has no category discount

  console.log(`  ${product.item} after category discount: ₹${price.toFixed(2)}`);
  return sum + price;
}, 0);

console.log(`\nSubtotal after category discounts: ₹${totalAfterCategoryDiscount.toFixed(2)}`);

// If total cart value > 50000 → apply extra 5% overall discount
let finalTotal = totalAfterCategoryDiscount;
if (totalAfterCategoryDiscount > 50000) {
  finalTotal = totalAfterCategoryDiscount * 0.95; // extra 5% off
  console.log("Extra 5% overall discount applied (cart > 50000)");
} else {
  console.log("No extra overall discount (cart ≤ 50000)");
}

console.log(`\n===== Final Payable Amount: ₹${finalTotal.toFixed(2)} =====`);
