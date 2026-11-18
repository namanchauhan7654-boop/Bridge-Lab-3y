// Q8: Retry an order submission up to three times

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // The request succeeds or fails with equal probability.
            if (Math.random() < 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject(new Error("Temporary order submission failure"));
            }
        }, 500);
    });
}

async function processOrder() {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    throw new Error("Order could not be processed");
}

processOrder().catch(error => {
    console.error("Final failure:", error.message);
});
