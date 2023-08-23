// reduse is used for adding and initial value is given by user

const number = [1, 2, 3]

const arr = number.reduce( (init, num) => {

        console.log(`initial_value: ${init} and secondary_value: ${num}`)  //  for inspect we use backtick `
        return init + num

}, 0) // value is initialized here

console.log(arr)