const result = document.querySelector('.result');
const tempResult = document.querySelector('.tempResult');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

const operators = document.querySelectorAll('.operators');
operators.forEach((operator) => operator.addEventListener('click', sendToTemp));

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => number.addEventListener('click', appendResult));

equals.addEventListener('click', operate);

function appendResult(event) {
    if (result.innerText == 0) {
       result.textContent = event.target.innerText;
    }
    else if (result.innerText.length < 8) {
        result.append(event.target.innerText);
    }
    result.innerText.includes('.') ? decimal.disabled = true : decimal.disabled = false;
}

function sendToTemp(event) {
    tempResult.textContent = result.innerText + ' ' + event.target.innerText;
    result.textContent = '0';
    operators.forEach((operator) => operator.disabled = true);
    equals.disabled = false;
    result.innerText.includes('.') ? decimal.disabled = true : decimal.disabled = false;
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    tempResult.append(' ' + result.innerText);
    let array1 = tempResult.innerText.split(' ');
    
    if (array1[1] == '+') {
        result.textContent = add(array1[0], array1[2]);
    }

    else if (array1[1] == '-') {
        result.textContent = subtract(array1[0], array1[2]);
    }

    else if (array1[1] == '×') {
        result.textContent = multiply(array1[0], array1[2]);
    }

    else if (array1[1] == '÷') {
        result.textContent = divide(array1[0], array1[2]);
    }
    equals.disabled = true;
    operators.forEach((operator) => operator.disabled = false);
    result.innerText.includes('.') ? decimal.disabled = true : decimal.disabled = false;
}