import { add } from "../math";
import { multiply } from "../math";

const addHandler = () =>{
//add functionality 
    const addButton = document.getElementById('add');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const multiplyButton = document.getElementById('multiply');
    const result = document.getElementById('resultBox');
    const updateDomWithAddedNumbers = () =>{
        result.innerHTML= "Add Result: "+add(number1.value,number2.value);    
       
    } 
    addButton.addEventListener('click', updateDomWithAddedNumbers);
}

// here the default export from this file is event handler function;
const multHandler = () =>{
    const addButton = document.getElementById('add');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const multiplyButton = document.getElementById('multiply');
    const result = document.getElementById('resultBox');
    const multiplyAnswer = () =>{
        result.innerHTML = "Multiply Result: "+multiply(number1.value, number2.value);
        
    }
    multiplyButton.addEventListener('click' , multiplyAnswer);
}

export default addHandler;
export {multHandler};
