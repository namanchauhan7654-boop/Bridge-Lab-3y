// Q10: Asynchronous food delivery pipeline with error handling

// Each step waits for a random 1-2 seconds and may fail.
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

function takeOrder() {
    return runDeliveryStep("takeOrder", "Step 1: Order taken");
}

function prepare() {
    return runDeliveryStep("prepare", "Step 2: Food prepared");
}

function pack() {
    return runDeliveryStep("pack", "Step 3: Package ready");
}

function dispatch() {
    return runDeliveryStep("dispatch", "Step 4: Out for delivery");
}

function deliver() {
    return runDeliveryStep("deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();
