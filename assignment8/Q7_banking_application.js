// Q7: Bank account with private balance field

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

try {
    account.deposit(500);
    account.withdraw(300);
    console.log("Current balance: ₹" + account.getBalance());

    // This withdrawal is more than the available balance.
    account.withdraw(2000);
} catch (error) {
    console.error("Transaction failed:", error.message);
}

console.log("Final balance: ₹" + account.getBalance());

// #balance is private and cannot be accessed directly outside the class.
