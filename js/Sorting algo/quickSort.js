function partition(arr) {
    let pivot = arr[0];
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {

        while (arr[leftIndex] <= pivot) {
            leftIndex++;
        }
        while (arr[rightIndex] > pivot) {
            rightIndex--;
        }
        if (leftIndex < rightIndex) {
            let temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;
        }
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        return rightIndex;
    }
}

let arr = [5,2,9,3,1,4,7]
console.log(partition(arr));
