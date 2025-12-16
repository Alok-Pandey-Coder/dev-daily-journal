function stringToNumber(input) {
    let num = Number(input);
    if(isNaN(num)) return "Not a number";
    return num;
}

function flipBoolean(input) {
    let ans = Boolean(input);
    return !ans;
}

function whatAmI(input) {
    if(typeof input === "Number") {
        return `I'm a number!`;
    }
    else if(typeof input === "string") {
        return `I'm a string!`;
    }
    else {
        return `I'm a ${typeof input}!`;
    }
}

function isItTruthy(input) {
    if(input) {
        return `It's truthy!`;
    }
    return `It's falsey!`;
}
