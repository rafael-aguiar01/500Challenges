// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


function myFunction(arr){
    return arr.every((val, ind, arr) => val === arr[0])
}

// The author's solution
// function myFunction( arr ) {
//   return new Set(arr).size === 1
// }

console.log(myFunction([true, true, true, true])) // Expected true 
console.log(myFunction(['test', 'test', 'test'])) // Expected true 
console.log(myFunction([1,1,1,2])) // Expected false 
console.log(myFunction(['10',10,10,10])) // Expected false 