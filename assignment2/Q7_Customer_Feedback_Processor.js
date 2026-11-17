// Q7. Customer Feedback Processor
// Store a feedback string
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words using split()
const wordCount = feedback.trim().split(/\s+/).length;

// Check if the feedback includes "bad" or "poor" using includes()
const hasNegative =
  feedback.toLowerCase().includes("bad") ||
  feedback.toLowerCase().includes("poor");

// Conditional statements
if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}

console.log("Word Count:", wordCount);
console.log("Feedback text:", feedback);
