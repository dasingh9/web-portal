//classes inheritance
class Person {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName();
    }
}

class Employee extends Person {
    constructor(firstName, lastName, phoneNumber, email, dept, salary) {
       super(firstName, lastName, phoneNumber, email);
       this.dept = dept;
       this.salary = salary;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, email, cusomerId, deliveryAddress) {
       super(firstName, lastName, phoneNumber, email);
       this.cusomerId = cusomerId;
       this.deliveryAddress = deliveryAddress;
    }
}

const emp1 = new Employee("Dav", "S", "0123456789", "dav@emample.com", "Accounts", 90000);
const customer1 = new Customer("Peter", "Kelly", "0236456789", "peter@emample.com", "C101", "11 Hill Road, Christchurch");

console.log(emp1);
console.log(customer1);