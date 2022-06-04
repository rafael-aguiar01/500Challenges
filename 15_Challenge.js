// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction(arr){
    let largetText = 0
    let largetIndex
    for(let index in arr){
        if(largetText < arr[index].length){
            largetText = arr[index].length
            largetIndex = [index]
        }         
    }
    return arr[largetIndex]
}

//The author's solution
// function myFunction( arr ) {
//     return arr.reduce((a, b) => a.length <= b.length ? b : a)
//     }

console.log(myFunction(['help', 'me'])) // Expected'help'
console.log(myFunction(['I', 'need', 'candy'])) // Expected 'candy'