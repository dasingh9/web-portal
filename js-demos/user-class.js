class User {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    hasShortName() {
        return this.first.length <= 3;
    }

    getDisplayName() {
        return this.first + " " + this.last;
    }
}

// we can create multiple users with different names
let user1 = new User('Tim', 'Smith', 20); // need to use 'new'
console.log(JSON.stringify(user1)); // User { first: 'Tim', last: 'Smith', age:20 }
console.log(user1.hasShortName()); // true
console.log(user1.getDisplayName()); // Tim Smith


let user2 = new User('Peter', 'K', 53); // need to use 'new'
console.log(user2); // User { first: 'Peter', last: 'K', 53 }
console.log(user1.getDisplayName()); // Peter K

//alternative way to set user properties
let user3 = new User();
user3.first = 'Sam';
user3.last = 'Roar';
user3.age = 66;

console.log(user3); // User { first: 'Sam', last: 'Roar', 66 }
console.log(user1.getDisplayName()); // Sam Roar

