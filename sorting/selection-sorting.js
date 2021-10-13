const unsortedList = [8, 3, 9, 1, 0, 10, 2, 5, 4, 6, 9];

function selectionSorting(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[indexMin]);
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

const sortedArray = selectionSorting(unsortedList);
console.log(sortedArray);
