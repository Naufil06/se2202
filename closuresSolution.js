let counter = function (increment) {
    
    let count = 0; // ✅ use let for separate count variables in each closure

    /*
        Create and return an inner function that receives a value increment
        and increments the value stored in count by increment.
    */
    return function() {
        count += increment;
        return count;
    }
}

let countByTwo = counter(2); // closure that adds 2 each time
let countByOne = counter(1); // closure that adds 1 each time

// DO NOT change the lines below
console.log(countByTwo()); // 2
console.log(countByOne()); // 1
console.log(countByTwo()); // 4
console.log(countByOne()); // 2
