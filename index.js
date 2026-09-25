function calculateTax(amount) {
    return amount * 0.10;
}
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercantage) {
    return originalPrice * (1 - discountPercantage / 100);
}
if (typeof module !== 'undefined') {
    module.exports = {
        calculateTax,
        convertToUpperCase,
        findMaximum,
        isPalindrome,
        calculateDiscountedPrice
    };
}
