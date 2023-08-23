// reduse is used for adding and initial value is given by user

const number = [1, 2, 3]

const arr = number.reduce( (init, num) => {

        return init + num

}, 0)

console.log(arr)