// Q2. String Manipulation Report
// Store a product name with extra spaces
let productName = " wireless headphones PRO ";

// Trim extra spaces, convert to lowercase
let cleaned = productName.trim().toLowerCase();

// Capitalize the first letter of each word
let titleCase = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace "Pro" with "Pro Edition"
let finalTitle = titleCase.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log("Cleaned Title:", finalTitle);
console.log("Length of title:", finalTitle.length);
