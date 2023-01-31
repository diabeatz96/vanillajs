import { add, mult, sub, divide } from "./math";

const eventHandler = () => {
    const addButton = document.getElementById("add");
    const multButton = document.getElementById("multiply");
    const subButton = document.getElementById("subtract");
    const divideButton = document.getElementById("divide");

    const number1 = document.getElementById("number-1");
    const number2 = document.getElementById("number-2");
    const result = document.getElementById("result");

    const updateDomWithAddedNumbers = () => {
        //result.innerHTML = parseInt(number1.value, 10) + parseInt(number2.value, 10);
       result.innerHTML = `Your sum is: ${add(number1.value , number2.value)}`;
    }

    const updateDomWithMultiplyNumbers = () => {
        result.innerHTML = `Your product is: ${mult(number1.value, number2.value)}`;
    }
    
    const updateDomWithSubtractNumbers = () => {
        result.innerHTML = `Your difference is: ${sub(number1.value, number2.value)}`;
    }
    const updateDomWithDivideNumbers = () => {
        result.innerHTML = `Your quotient is: ${divide(number1.value, number2.value)}`;
    }

    addButton.addEventListener("click", updateDomWithAddedNumbers);
    multButton.addEventListener("click", updateDomWithMultiplyNumbers);
    subButton.addEventListener("click", updateDomWithSubtractNumbers);
    divideButton.addEventListener("click", updateDomWithDivideNumbers);

}

export default eventHandler;
