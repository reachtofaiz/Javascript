const mynums = [1,2,3,4,5,6,7,8,9,10]


/* const numbers = mynums.filter((numbers) => numbers > 4 )
   console.log(numbers); */


// or filter can be use it as


/*const numbers = mynums.filter((numbers) =>{
        return numbers > 4 })
        
        console.log(numbers);
 */


//and if we don't use these two method then we use foreach method 

   const newNum =[]
   mynums.forEach( (numbers) => {
      if(numbers > 4){
         newNum.push(numbers)
      }
   })
 console.log(newNum);