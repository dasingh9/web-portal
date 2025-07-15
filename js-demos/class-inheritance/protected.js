class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this._balance = initialBalance; // protected by convention
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`${this.owner} deposited $${amount}`);
      sendEmail();
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`${this.owner} withdrew $${amount}`);
    } else {
      console.log(`Insufficient funds for ${this.owner}`);
    }
  }

  getBalance() {
    return this._balance;
  }
}

mysavingaccount1.deposit(1000);

class SavingsAccount extends BankAccount {
  constructor(owner, initialBalance, interestRate) {
    super(owner, initialBalance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this._balance * this.interestRate;
    this._balance += interest;
    console.log(`${this.owner} received $${interest.toFixed(2)} interest`);
  }
}

// Usage
const aliceAccount = new SavingsAccount("Alice", 1000, 0.05);
aliceAccount.deposit(500);
aliceAccount.withdraw(200);
aliceAccount.applyInterest();

console.log(`Final Balance: $${aliceAccount.getBalance().toFixed(2)}`);
