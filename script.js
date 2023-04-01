function calculate() {
    let operator = document.getElementById("operator").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = Number(num1);
    num2 = Number(num2);
    let result = document.getElementById("result");
    result.style.color = 'green';
    switch (operator) {
        case '+':
            result.innerHTML = num1 + num2;
            break;
        case '-':
            result.innerHTML = num1 - num2;
            break;
        case '*':
            result.innerHTML = num1 * num2;
            break;
        default:
            result.style.color = 'red';
            result.innerHTML = "Invalid Input";
    }
}