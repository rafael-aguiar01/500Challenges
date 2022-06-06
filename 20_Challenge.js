// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a,b){
    let sum = 0
    for (let index in a){
        if (a[index] > b) { sum += a[index] }
    }
    return sum
}

// The author's solution
// function myFunction(a, b) {
//     return a.reduce((sum, cur) => {
//       if (cur > b) return sum + cur;
//       return sum;
//     }, 0);
//   }

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)) // Expected 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)) // Expected 1
console.log(myFunction([78, 99, 100, 101, 401], 99)) // Expected 602