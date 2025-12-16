// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;
// maine ek galti ki woh ki maine ++, -- operator ko const variable ke saath use kiya jo ki allowed nahin hai

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return b - a;
}

function multiply() {
    return a * b;
}

// Divide larger value by small
function divide() {
    return b/a;
}

// Increase value of a by 1
function increment() {
    let c = a + 1;
    return c;
}

// Decrease value of b by 1
function decrement() {
    let c = b-1
    return c;
}

// Divide larger value by small to find the reminder
function reminder() {
    return b%a;
}
