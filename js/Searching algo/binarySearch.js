function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex <= rightIndex){
        let middle = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[middle] == target){
            return middle;
        }
        if (target < arr[middle]) {
            rightIndex = middle - 1;
        }else{
            leftIndex = middle + 1;    
        }
    }
    return -1;

}

console.log(binarySearch([-5, 2, 4, 6, 10,12,15,16,18],10));
console.log(binarySearch([-5, 2, 4, 6, 10,12,15,16,18], 16));
console.log(binarySearch([-5, 2, 4, 6, 10,12,15,16,18], 20));
