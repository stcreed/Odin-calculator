//jshint esversion:6

class calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
}

let firstNum = parseFloat(prompt("Please type your first number:"));
let secondNum = parseFloat(prompt("Please type your second number:"));
let operatorType = prompt("Please type the operator you want:");

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

function operate() {
  (operatorType == "+") ? add()
  : (operatorType == "-") ? subtract()
  : (operatorType == "/") ? divide()
  : (operatorType == "*") ? multiply()
  : alert("invalid input");
}

function add() {
  console.log(firstNum + secondNum);
}

function subtract() {
    console.log(firstNum - secondNum);
}

function divide() {
    console.log(firstNum / secondNum);
}

function multiply() {
    console.log(firstNum * secondNum);
}

operate();
