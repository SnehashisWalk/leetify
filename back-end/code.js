/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    if (x < 0) {
        return false;
    }

    const digits = [];
    let num = x;

    while (num !== 0) {
        const digit = num % 10;
        digits.push(digit);
        num = Math.floor(num / 10);
    }

    const len = digits.length;

    for (let i = 0; i < len / 2; i++) {
        if (digits[i] !== digits[len - i - 1]) {
        return false;
        }
    }

    return true;
};

function main() {
    const x = process.argv[2];
    console.log(isPalindrome(x));
}

main();