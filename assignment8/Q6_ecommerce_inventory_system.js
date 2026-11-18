// Q6: E-commerce inventory operations using array methods

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 12 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 800, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Notebook", category: "Stationery", price: 100, stock: 2 }
];

function getLowStockProducts(productList) {
    return productList.filter(product => product.stock < 5);
}

function sortProductsByPrice(productList) {
    // Copy the array first so the original order is not changed.
    return [...productList].sort((first, second) => first.price - second.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:");
console.table(getLowStockProducts(products));

console.log("Products sorted by price:");
console.table(sortProductsByPrice(products));

console.log("Total inventory value: ₹" + calculateTotalInventoryValue(products));

console.log("Products grouped by category:");
console.log(groupByCategory(products));
