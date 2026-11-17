/**
 * Q2: Multi-Type Data Summary
 * Demonstrates various data types, typeof operator, Array.isArray(), and console.table().
 */

const userSummary = [
    { label: "Username", value: "Priya_99", type: typeof "Priya_99" },
    { label: "User ID", value: 10452, type: typeof 10452 },
    { label: "Is Active", value: true, type: typeof true },
    { label: "Roles", value: ["Admin", "Editor"], type: Array.isArray(["Admin", "Editor"]) ? "array" : typeof ["Admin", "Editor"] },
    { label: "Profile", value: { theme: "dark", notifications: true }, type: typeof { theme: "dark" } },
    { label: "Middle Name", value: null, type: typeof null }, // Note: typeof null evaluates to 'object' in JS
    { label: "Last Login", value: undefined, type: typeof undefined }
];

console.log("Database User Summary Report:");
console.table(userSummary);
