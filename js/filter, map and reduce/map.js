// map is used in array to change the value for example too  add, subtract whatever you want to do with array..     

/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = numbers.map( (num) => num + 5)
    console.log(result)

*/


// Chaining method -- it is used to use several method at once

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result = numbers.map( (num) => num * 10 ).map( (num) => num / 10 ).filter( (num) => num > 5 )

console.log(result)
