// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj){
    return obj.country
}

console.log(myFunction({continent: 'Asia', country: 'Japan'}))

// myFunction({  continent: 'Asia',  country: 'Japan'})
// Expected
// 'Japan'
