// Basic example for encasulation 
// `_variableName`(single underscore) is used to declear private variable 
class BankAccount {
    constructor(balance) {
        this._balance = balance; // underscore convention for private property
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

let account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
