// No 1 start
function calculateSum(a, b) {

    return a + b;
}
let num1 = 4;
let num2 = 6;
let result1 = calculateSum(num1, num2)
console.log("1.Sum of two number is =", result1)

// No 1 end

//No 2 start
function isEven(a) {
    if (a % 2 == 0)
        return true;
    else
        return false;
}
// even number
let number = 4
let result2 = isEven(number)
console.log("2.Here this number is 4,so ", result2)

// odd number
number = 5
result2 = isEven(number)
console.log("or,Here this number is 5 which is odd,so", result2)

//No 2 end

// No 3 start

function findMax(arr1) {
    return Math.max(...arr1)
}

let numbers = [3, 9, 4, 6, 7, 2, 8]
let maxNumber = findMax(numbers)
console.log("3.The largest number in the array is: ", maxNumber);

// No 3 end

// No 4 start

function reverseString(str) {
    return str.split('').reverse().join('');
}
let originalString = "Ziad"
let reversedString = reverseString(originalString);
console.log("4.The reverse string is: ", reversedString)

// No 4 end

// No 5 start

function filterOddNumbers(numbers1) {
    return numbers1.filter(function(num) {
        return num % 2 !== 0;
    })
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const oddNumbers = filterOddNumbers(numbers1)
console.log("5.After filtering the array,odd numbers are: ", oddNumbers)

// No 5 end

// No 6 start

function sumArray(numbers2) {

    let sum = 0;
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i]
    }
    return sum;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7]
const sumNumbers = sumArray(numbers2)
console.log("6.The sum of numbers of this array is =", sumNumbers)

// No 6 end

// No 7 start

function sortArray(arr) {

    return arr.slice().sort((a, b) => a - b)
}

let numbers3 = [5, 2, 9, 1, 6, 7, 3, 5]
let sortNumbers = sortArray(numbers3)

console.log("7.The sorted array in ascending order is =", sortNumbers)

// No 7 end

// No 8 start

function capitalizeFirstLetter(name) {
    if (name.length == 0) {
        return name;
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log("8.", capitalizeFirstLetter("hello"))

// No 8 end