function cacheFunction(fn) {
    const cache = {};

    return function(n) {
        console.log(cache[n]);
        if (cache[n]) {
            console.log('From cache ', n);
            return cache[n];
        }
        let result = fn(n);
        cache[n] = result;
        return result;
    }
}

function factorial(n) {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cacheFactorial = cacheFunction(factorial);
const result1 = cacheFactorial(5);
const result2 = cacheFactorial(10);
const result3 = cacheFactorial(4);
const result4 = cacheFactorial(3);
const result5 = cacheFactorial(2);
const result6 = cacheFactorial(1);

console.log({ result1, result2, result3 });
