export function checkInclusion(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const map1 = makeMapFromString(str1);
    const map2 = makeMapFromString(str2.slice(str1.length));

    for (let i = 0; i < str2.length - str1.length; i++) {

    }



    let counter = 0;
    for (let i = 0; i < str2.length; i++) {
        if (map1[str2[i]]) {
            counter += 1;
            if (counter === str1.length) {
                return true;
            }
        } else {
            counter = 0;
        }
    }
    return false;
}

function makeMapFromString(str) {
    return Array.from(str).reduce((acc, letter) => {
        if (!acc[letter]) {
            acc[letter] = 0;
        }
        acc[letter] += 1;
        return acc;
    }, {})
}
