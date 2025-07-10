// Function to generate Fibonacci sequence as an array
function createFibonnacci(count) {
    const fib = [];
    if (count <= 0) return fib;

    fib.push(1);
    if (count === 1) return fib;

    fib.push(1);
    for (let i = 2; i < count; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Function to print each number in an array using setInterval
function printFibonacci(numbersArray) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index >= numbersArray.length) {
            clearInterval(intervalId); // Stop when done
            return;
        }
        console.log(numbersArray[index]);
        index++;
    }, 1000);
}

// Example usage:
const fibArray = createFibonnacci(30);
//printFibonacci(fibArray);
console.log(fibArray.join(", "));

