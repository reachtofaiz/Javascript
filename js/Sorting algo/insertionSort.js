function insertionSort(arr){
    for(let i=0; i <= arr.length-1; i++){
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j=j-1;
        }
        arr[j+1] = temp;
    }
    return arr;
}

// const arr = [5, 4, 3, 2, 1]
// console.log(insertionSort(arr));

const arr = [7, -1, 3, -4, 0, 8]
console.log(insertionSort(arr));
