function mySort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            // Compare adjacent elements and swap them if they are in the wrong order (descending)
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const unsortedArray = [5, 2, 9, 1, 5, 6];
mySort(unsortedArray);

console.log("Sorted in descending order: " + unsortedArray);
