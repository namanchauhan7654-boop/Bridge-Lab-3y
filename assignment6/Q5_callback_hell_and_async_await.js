// Q5: Callback hell version and cleaner async/await version

// Version 1: Nested callbacks (callback hell).
function designCallback(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function buildCallback(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function testCallback(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deployCallback(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrateCallback(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        callback();
    }, 1000);
}

function runWithCallbacks() {
    console.log("Callback version started");
    designCallback(() => {
        buildCallback(() => {
            testCallback(() => {
                deployCallback(() => {
                    celebrateCallback(() => {
                        console.log("Callback pipeline finished");
                    });
                });
            });
        });
    });
}

// Version 2: Async/await.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${stageName} completed`);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await version started");
    await runStage("Design");
    await runStage("Build");
    await runStage("Testing");
    await runStage("Deployment");
    await runStage("Celebration");
    console.log("Async/await pipeline finished");
}

// Run one version at a time to compare the output.
// Uncomment the version you want to test:
runWithCallbacks();
// runWithAsyncAwait();

// Explanation:
// async/await makes sequential asynchronous steps look like ordinary
// top-to-bottom code. It reduces deep nesting and makes try/catch possible.
