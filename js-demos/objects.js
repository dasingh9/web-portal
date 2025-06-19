const users = [
    {
        firstName: "John",
        hasDog: true,
        isEligible: true,
        age: 15,
        address: {
            houseNumber: "123",
            suburb: "Newmarket",
            city: "Auckland"
        },
        isAdult() { return this.age >= 18 }
    },
    {
        firstName: "Peter",
        hasDog: true,
        isEligible: true,
        age: 27,
        address: {
            houseNumber: "123",
            suburb: "Newmarket",
            city: "Auckland"
        },
        isAdult() { return this.age >= 18 }
    }
];

// iterate through the objects
for (let user of users) {
    console.log(`${user.firstName} is adult: ${user.isAdult()}`);
}