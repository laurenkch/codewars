// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list.You will be given two inputs a word and an array with words.You should return an array of all the anagrams or an empty array if there are none.For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy', 'lacer']) => []

function anagrams(word, words) {
    let newlist = words.filter((item) => word.split('').sort().join() === item.split('').sort().join())
    return newlist
}

 //////////////////////////////////////////////////////////2/26/22

// Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    const secondResults = seconds % 60
    const minuteResults = ((seconds - secondResults) % 3600) / 60
    const hourResults = Math.trunc(seconds / 3600)

    function pad(num) {
        return (num.toString().length < 2 ? '0' + num : num)
    };

    return `${pad(hourResults)}:${pad(minuteResults)}:${pad(secondResults)}`
}

// In this kata, you will write a function that returns the positions and the values of the "peaks"(or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5(since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks.Both of these properties should be arrays.If there is no peak in the given array, then the output should be { pos: [], peaks: [] }.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return { pos: [3, 7], peaks: [6, 3] }(or equivalent in other languages)

// All input arrays will be valid integer arrays(although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus!!![1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and[1, 2, 2, 2, 2] do not.In case of a plateau - peak, please only return the position and value of the beginning of the plateau.For example: pickPeaks([1, 2, 2, 2, 1]) returns { pos: [1], peaks: [2] } (or equivalent in other languages)

// Have fun!

function pickPeaks(arr) {
    const keyvalue = arr.map((num, index) => ({ index: index, value: num }))
    const reducedArray = keyvalue
        .reduce((arr, obj) => { if (arr[(arr.length - 1)].value != obj.value) arr.push(obj); return arr; }, [arr[0]])
        .splice(1)
    const peaks = reducedArray
        .filter((item, index, array) => index > 0 && index < array.length - 1 && array[index - 1].value < item.value && array[index + 1].value < item.value);
    let pos = []
    let values = []
    peaks.forEach((item) => { pos.push(item.index); values.push(item.value) })


    return { 'pos': pos, 'peaks': values }
};

