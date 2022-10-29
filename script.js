const result = document.querySelector('.result');
const decimal = document.querySelector('.decimal');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => number.addEventListener('click', appendResult));

decimal.addEventListener('click', function() {
    decimal.disabled = true;
})

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
console.log(decimal);

//make numbers append when buttons are clicked. Store number when an operator is clicked