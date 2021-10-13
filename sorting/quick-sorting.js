const unsortedList = [8, 3, 9, 1, 0, 10, 2, 5, 4, 6, 9];

function quickSorting(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    const less = [];
    const greater = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSorting(less), pivot, ...quickSorting(greater)];
}

const sortedArray = quickSorting(unsortedList);
console.log(sortedArray);
