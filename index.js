
function calc(){
    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let answer = document.getElementById("answer");
    answer.style.color = 'green';

    switch(operator){
        case '+':
            answer.innerHTML = numberOne + numberTwo;
            break;
        case '-':
            answer.innerHTML = numberOne - numberTwo;
            break;
        case '*':
            answer.innerHTML = numberOne * numberTwo;
            break;
        default:
            answer.style.color = 'red';
            answer.innerHTML = "Invalid Input";
    }
}