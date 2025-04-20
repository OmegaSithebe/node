console.log("Hello node js");

const array = [1,2,3,4]

console.log(array, 'array');

setTimeout (()=>{
    console.log("This message is delayed by 2 seconds");
}, 2000);

console.log("This is the last line of the sync code");