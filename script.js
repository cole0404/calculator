const result = document.querySelector('.result');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => number.addEventListener('click', appendResult));

function appendResult(event) {
    if (result.innerText == 0) {
       result.textContent = event.target.innerText;
    }
    else {
        result.append(event.target.innerText);
    }
}

function add(a, b) {
    return a + b;
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

function operate(a, b, c) {

}
console.log(result.innerText);

//make numbers append when buttons are clicked. Store number when an operator is clicked