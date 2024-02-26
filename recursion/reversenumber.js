let sum = 0;

const reverse = (n) => {
    // Base Case: When the number becomes 0, return the sum
    if (n === 0) {
        return sum;
    }
    // Extract the last digit of the number
    let lastDigit = n % 10;
    // Reduce the number by removing its last digit
    let remainingNumber = Math.floor(n / 10);
    // Construct the reversed number
    sum = sum * 10 + lastDigit;
    // Recursively reverse the remaining number
    return reverse(remainingNumber);
}

console.log(reverse(189)); // Output: 981
