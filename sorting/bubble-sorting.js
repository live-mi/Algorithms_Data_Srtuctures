const unsortedList = [8, 3, 9, 1, 0, 10, 2, 5, 4, 6, 9];

function bubbleSorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
           if (array[j] < array[i]) {
               const tmp = array[i];
               array[i] = array[j];
               array[j] = tmp;
           }
        }
    }
    return array;
}

const sortedArray = bubbleSorting(unsortedList);
console.log(sortedArray);
