// reduse is used for adding and initial value is given by user

/*
const number = [1, 2, 3]

const arr = number.reduce( (init, num) => {

        console.log(`initial_value: ${init} and secondary_value: ${num}`)  //  for inspect we use backtick `
        return init + num

}, 0) // value is initialized here

console.log(arr)
*/

// example

const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]


    const result = shoppingCart.reduce( (initial,item) =>{

            console.log(`initial_value = ${initial} and secondary_value = ${item.price}`)
            return initial + item.price

    }, 0)
    console.log("Final price = %d",result)