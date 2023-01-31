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
        const sum = add(number1.value , number2.value)
        const noInputNums = Number.isNaN(sum) ? true : false;

       if(noInputNums) {
        result.innerHTML = `Your sum cannot be calculated because you didn't add values to 
        <span class = "badge text-bg-danger"> First Number </span> and <span  class = "badge text-bg-danger"> Second Number </span>`;
       } else {
        result.innerHTML = `Your sum is: <span class = "badge rounded-pill text-bg-primary"> ${sum} </span> `;
       } 
    }

    const updateDomWithMultiplyNumbers = () => {
        const product = mult(number1.value , number2.value)
        const noInputNums = Number.isNaN(product) ? true : false;

        if(noInputNums) {
            result.innerHTML = `Your product cannot be calculated because you didn't add values to 
            <span class = "badge text-bg-danger"> First Number </span> and <span  class = "badge text-bg-danger"> Second Number </span>`;
        } else {
            result.innerHTML = `Your product is: <span class = "badge rounded-pill text-bg-primary">  ${product} </span>`;
        }
    }
    
    const updateDomWithSubtractNumbers = () => {
        const difference = sub(number1.value , number2.value)
        const noInputNums = Number.isNaN(difference) ? true : false;

        if(noInputNums) {
            result.innerHTML = `Your difference cannot be calculated because you didn't add values to 
            <span class = "badge text-bg-danger"> First Number </span> and <span  class = "badge text-bg-danger"> Second Number </span>`;
        } else {
            result.innerHTML = `Your difference is: <span class = "badge rounded-pill text-bg-primary">  ${difference} </span>`;
        }
    }
    const updateDomWithDivideNumbers = () => {
        const quotient = divide(number1.value , number2.value)
        const noInputNums = Number.isNaN(quotient) ? true : false;

        if(noInputNums) {
            result.innerHTML = `Your quotient cannot be calculated because you didn't add values to 
            <span class = "badge text-bg-danger"> First Number </span> and <span  class = "badge text-bg-danger"> Second Number </span>`;
        } else {
            result.innerHTML = `Your quotient is: <span class = "badge rounded-pill text-bg-primary">  ${quotient} </span>`;
        }
    }

    addButton.addEventListener("click", updateDomWithAddedNumbers);
    multButton.addEventListener("click", updateDomWithMultiplyNumbers);
    subButton.addEventListener("click", updateDomWithSubtractNumbers);
    divideButton.addEventListener("click", updateDomWithDivideNumbers);

}

export default eventHandler;
