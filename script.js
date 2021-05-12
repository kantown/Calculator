const operatorButtons = document.querySelectorAll('[data-operator]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const upperText = document.querySelector('[data-upper-screen]');
const bottomText = document.querySelector('[data-bottom-screen]');
const dotButton = document.querySelector('[data-dot]');

let summary = '';
let additionalVariable = '';
let operator = '';

const clear = () => {
    operator = '';
    summary = 0;
    upperText.textContent = '';
    bottomText.textContent = '';
}

const deleteFunction = () => {
    if(bottomText.textContent.length !== '' ) {
        bottomText.textContent = bottomText.textContent.slice(0, (bottomText.textContent.length - 1));
    }
}

const appendNumber = (event) => {
    bottomText.textContent = bottomText.textContent + event.target.textContent;
}

const result = () => {
    if(operator !== '' && bottomText.textContent !== '') {
        if(operator === '÷') summary = parseFloat(summary) / parseFloat(bottomText.textContent);
        if(operator === '*') summary = parseFloat(summary) * parseFloat(bottomText.textContent);
        if(operator === '+') summary = parseFloat(summary) + parseFloat(bottomText.textContent);
        if(operator === '-') summary = parseFloat(summary) - parseFloat(bottomText.textContent);
    }
    operator = ''; 
    upperText.textContent = summary;
    bottomText.textContent = '';
}

const dotFunction = (event) => {
    bottomText.textContent = bottomText.textContent + event.target.textContent;
}

const operation = (event) => {
    console.log(operator);
    console.log(summary);
    if(operator !== '' && bottomText.textContent !== '') {
        if(operator === '÷') summary = parseFloat(summary) / parseFloat(bottomText.textContent);
        if(operator === '*') summary = parseFloat(summary) * parseFloat(bottomText.textContent);
        if(operator === '+') summary = parseFloat(summary) + parseFloat(bottomText.textContent);
        if(operator === '-') summary = parseFloat(summary) - parseFloat(bottomText.textContent);
        operator = event.target.textContent;
        upperText.textContent = summary + operator;
        bottomText.textContent = '';
    }
    else if (bottomText.textContent === ''){
        operator = event.target.textContent;
        upperText.textContent = summary + operator;
        bottomText.textContent = '';
    } 
    else {
        summary = bottomText.textContent;
        operator = event.target.textContent;
        upperText.textContent = summary + operator;
        bottomText.textContent = '';
    }

}

operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operation))
numberButtons.forEach(numberButton => numberButton.addEventListener('click', appendNumber));
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteFunction);
equalButton.addEventListener('click', result);
dotButton.addEventListener('click', dotFunction);