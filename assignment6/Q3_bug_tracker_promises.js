// Q3: Convert callback-based bug fetching to Promises

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs fetched successfully:");
        console.table(bugs.map((bug, index) => ({
            Number: index + 1,
            Bug: bug
        })));
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
