// find if given number is happy number

let num = 82;
let sum = 0;
let copy = num;

while (num > 0) {
    let last_digit = num % 10;
    num = parseInt(num / 10);

    sum = sum + (last_digit * last_digit);

    if (num == 0 && sum > 9) {
        num = sum;
        sum = 0;
    }
}


if (sum == 1) {
    console.log(copy + " is happy number");
} else {
    console.log(copy + " is unhappy number");
}