// Q4: Run two server requests concurrently with Promise.all() and Promise.race()

function deployToServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

// Promise.all() waits until both succeed, or rejects if either fails.
Promise.all([serverA, serverB])
    .then(results => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.error("Deployment error:", error.message);
    });

// Promise.race() settles with the first promise that settles.
// If that first result is a rejection, race() also rejects.
Promise.race([
    deployToServer("Server A", 2000),
    deployToServer("Server B", 3000)
])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.error("Fastest response failed:", error.message));
