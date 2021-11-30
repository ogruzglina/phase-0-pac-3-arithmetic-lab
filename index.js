function add(a, b) {
    return a + b;
}
console.log(add(1, 80));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(60, 40));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3.4));

function divide(a, b) {
    return a / b;
}
console.log(divide(5, 2.5));

function increment(n) {
    return (n += 1);
}
console.log(increment(5));

function decrement(n) {
    return (n -= 1);
}
console.log(decrement(31));

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt("3"));
console.log(makeInt("s.dflm"));
console.log(makeInt('0x2328'));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal('2.222'));
console.log(preserveDecimal("sdflm"));
console.log(preserveDecimal("-3.08"));