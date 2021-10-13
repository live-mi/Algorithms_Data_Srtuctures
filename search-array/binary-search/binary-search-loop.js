const array = [1, 3, 5, 6, 8, 9, 15, 18, 19, 24, 27, 30];

function binarySearch(array, number) {
    let startIndex = 0;
    let endIndex = array.length;

    while (startIndex < endIndex) {
        const baseIndex = Math.floor((endIndex + startIndex) / 2);
        if (array[baseIndex] === number) {
            return baseIndex;
        }
        if (number > array[baseIndex]) {
            startIndex = baseIndex + 1;
        } else {
            endIndex = baseIndex;
        }
    }
    return null;
}

const binarySearchLoop = binarySearch(array, 0);
console.log(binarySearchLoop);
