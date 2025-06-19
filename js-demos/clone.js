const user1 = {
    firstName: "John",
    hasDog: true,
    isEligible: true,
    age: 20,
    dob: new Date("2001-05-10"),
    address: {
        houseNumber: "123",
        suburb: "Newmarket",
        city: "Auckland"
    }
};

const user2 = { ...user1 };  //shallow copy using Spread Operator
user2.firstName = "Peter";
user2.address.city = "Hamilton";

const user3 = structuredClone(user1);
user3.firstName = "Robin";
user3.address.city = "Wellington";

const user4 = JSON.parse(JSON.stringify(user1));
user4.firstName = "Mario";
user4.address.city = "Manukau";

console.log(`${user1.firstName}, ${user1.address.city}`);  // John, Wellington
console.log(`${user2.firstName}, ${user2.address.city}`);  // Robin, Wellington
console.log(`${user3.firstName}, ${user3.address.city}`);  // John, Hamilton
console.log(`${user4.firstName}, ${user4.address.city}`);  // John, Hamilton