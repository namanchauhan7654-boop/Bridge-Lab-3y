// Q2: Calculate a food bill using map(), reduce() and error handling

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Sandwich", price: 100 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    // Find the price of each ordered item. Throw if an item is not on the menu.
    const priceList = orderItems.map(itemName => {
        const menuItem = menu.find(item => item.name.toLowerCase() === itemName.toLowerCase());

        if (!menuItem) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return menuItem.price;
    });

    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Burger", "Pizza", "Pasta"];
    console.log("Order total: ₹" + calculateBill(order));
} catch (error) {
    console.error("Unable to place order:", error.message);
}

try {
    const invalidOrder = ["Burger", "Sushi"];
    console.log("Order total: ₹" + calculateBill(invalidOrder));
} catch (error) {
    console.error("Unable to place order:", error.message);
}
