//asynch functions practice
//used nodemon to run this

let a = 10;

console.log('first log: ' + a)
//set time out takes a callback function
setTimeout(() => {
    a +=5
    console.log('In call back function: ' + a)
}, 0)

// process to take some time
let timeEater = []
for (let i = 0; i < 200000; i++) {
    timeEater.unshift(5);
}

console.log('final log: ' + a)
console.log("here")
//take away
// async functions are ran at the same time that synchronous code is, however, asynchronous functions are not ran until after all async functions are
//for example, even though the async function finishes before the for loop does. also, notice that the final log runs before the call back log.
