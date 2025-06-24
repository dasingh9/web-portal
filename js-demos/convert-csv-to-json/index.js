const fs = require('fs');

function Customer(customerId, name, email) {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
}

function getCustomersList(csvFileName) {
    // Synchronously read the entire file as a string
    const customersCsv = fs.readFileSync(csvFileName, 'utf8');

    const rows = customersCsv.split("\r\n");

    const customers = [];
    for (let row of rows) {
        const columns = row.split(",");

        if (columns[0].includes("customerId"))
            continue;

        const customer = new Customer(columns[0], columns[1], columns[2]);
        customers.push(customer);
    }
    return customers;
}

function writeJsonToFile(jsonFileName, customers) {
    const jsonString = JSON.stringify(customers);
    fs.writeFileSync("customers.json", jsonString);
    console.log("Csv file successfully converted to JSON file");
}

function sendEmailsToCusomers(customers) {
    customers.forEach((customer)=> {
        const subject = "Offer of the week";
        const body = "Login to your account to see the offer details";
        sendEmail(customer.email, subject, body);
    });
}

function sendEmail(email, subject, body) {
    console.log(`Sending email to ${email}, subject: ${subject}, body: ${body}`);
}

const customers = getCustomersList('customers.csv');

writeJsonToFile("customers.json", customers); // comment this if you don't want to write JSON to a file

sendEmailsToCusomers(customers);