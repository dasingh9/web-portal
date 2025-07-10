function printGreeting(name) { // simple undecorated function
    console.log('Hello, ' + name);
}

function add(a, b) {
    return a+b;
}

printGreeting('Undecorated');

function loggingTimingDecorator(originalFunction) { // same decorator function as before
    return function () { // BUT now the returned function doesn't name its arguments from here
        console.time('Function timer');
        console.log(`\nExecuting function ...`)
        //const result = originalFunction(name); // WON'T work as name is now undefined
        //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
        const result = originalFunction.apply(this, arguments) // and so does this - try out both
        console.log(arguments); // [Arguments] { '0': 8 }
        console.timeEnd('Function timer'); // stop the timer
        return result; // return the result of running the original function
    }
}
// returns the original function WITH the timing/logging features included
//const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
//decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way

const decoratedAdd = loggingTimingDecorator(add);
const result = decoratedAdd(10, 20);
console.log(`********* RESULT:  ${result} ****`);
