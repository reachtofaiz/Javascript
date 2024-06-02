/*
function linear_search(arr,target){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }

        }
        return -1;
}

console.log(linear_search([-5, 2, 10, 4, 6],10));
console.log(linear_search([-5, 2, 10, 4, 6],6));
console.log(linear_search([-5, 2, 10, 4, 6],11));
*/


function linear_sum(arr,target){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target){
                return [i,j]
            }
               
        } 
    }
}

console.log(linear_sum([1, 2, 3, 4], 7));
