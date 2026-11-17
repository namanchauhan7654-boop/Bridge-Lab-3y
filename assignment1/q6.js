/**
 * Q6: Progressive Discount System
 * Applies dynamic discount tiers based on purchase amount.
 */

const purchaseTotal = 12500;
let discountPercentage = 0;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = (purchaseTotal * discountPercentage) / 100;
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("--- Progressive Discount System ---");
console.log(`Original Total: ₹${purchaseTotal}`);
console.log(`Discount Applied: ${discountPercentage}%`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
