const array = [1, 3, 5, 6, 8, 9, 15, 18, 19, 24, 27, 30];

function binarySearchRecursive(array, number, from = 0, end = array.length) {
    const pivot = Math.floor((from + end) / 2);

    if (array[pivot] === number) {
        return pivot;
    }
    if (array.length === 0) {
        return null;
    }
    if (number < array[pivot]) {
        return binarySearchRecursive(array, number, 0, pivot - 1);
    }
    if (number > array[pivot]) {
        return binarySearchRecursive(array, number, pivot + 1, end);
    }
}

const number = binarySearchRecursive(array, 1);
console.log(number);
