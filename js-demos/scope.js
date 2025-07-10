function canDrive() {
    let timestamp = new Date(); // local variable
    if(age>=16) {
        console.log(`You can drive as of ${timestamp.toString()}`);
    }
    else {
        console.log(`You cannot  drive as of ${timestamp.toString()}`);
    }
}

const age = 40; // outer env
canDrive(age);

console.log(timestamp);