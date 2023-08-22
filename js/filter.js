const mynums = [1,2,3,4,5,6,7,8,9,10]


/* const numbers = mynums.filter((numbers) => numbers > 4 )
   console.log(numbers); */


// or filter can be use it as


/*const numbers = mynums.filter((numbers) =>{
        return numbers > 4 })
        
        console.log(numbers);
 */


//and if we don't use these two method then we use foreach method 

/*  const newNum =[]
   mynums.forEach( (numbers) => {
      if(numbers > 4){
         newNum.push(numbers)
      }
   })
   console.log(newNum);
*/

// 1-Question related on filter !!!
// a-find the genre which is History ?
// b-find the publish book in year 1992 ? 
// c-find the edition of book in  2010 ?
const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];


/* let result = books.filter( (bk) => bk.genre === 'History')

   console.log(result);
*/


/*   let result = books.filter( (bk) =>  {
      return bk.publish === 1992
   })

   console.log(result)
*/


     let result = books.filter( (book) => book.edition === 2010)    

      console.log(result)