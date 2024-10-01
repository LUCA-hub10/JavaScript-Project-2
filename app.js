// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 4. Find Maximum and Minimum
function findMaxMin(arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

// 5. Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// 6. Filter Array
function filterArray(arr, condition) {
    return arr.filter(item => item !== condition);
}

// 7. Factorial
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// 8. Prime Number Check
function isPrime(n) {
    if (n < 2) return `${n} is not prime`;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return `${n} is not prime`;
    }
    return `${n} is prime`;
}

// 9. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

