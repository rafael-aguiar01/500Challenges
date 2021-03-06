// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function myFunction(arr){
    return arr.sort((arr1,arr2) => arr1.b - arr2.b)
}

// The author's solution

// function myFunction(arr) {
//    const sort = (x, y) => x.b - y.b;
//    return arr.sort(sort);
// }

console.log(myFunction([{a:1,b:2},{a:5,b:4}])) // Expected [{a:1,b:2},{a:5,b:4}]
console.log(myFunction([{a:2,b:10},{a:5,b:4}])) // Expected [{a:5,b:4},{a:2,b:10}]
console.log(myFunction([{a:1,b:7},{a:2,b:1}])) // Expected [{a:2,b:1},{a:1,b:7}]

