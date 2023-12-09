var inputArea = document.getElementById("inputarea");
var acBtn = document.getElementById("btnac")
var squareBtn = document.getElementById("btnsquare")
var percentageBtn = document.getElementById("btnpercentage");
var divideBtn = document.getElementById("btndivide")
var btn1 = document.getElementById("btn1").value = 1;
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btnMultiply = document.getElementById("btnmultiply");
var btnSubtric = document.getElementById("btnsubtrict");
var btnPlus = document.getElementById("btnplus");
var btnEqualTo = document.getElementById("btnequalto");
var btnDote = document.getElementById("btndout");

function numbOne(value) {
    btn1 = 1;
    btn1 = inputArea.value;
}

function concatValues(event) {
    inputArea.value += event.target.value
}

function calculate() {
    if (inputArea.value.includes('%')) {
        let splittedValues = inputArea.value.split('%')

        let leftValue = splittedValues[0]
        let rightValue = splittedValues[1]

        let result = (leftValue / rightValue) * 100;

        inputArea.value = result
        return;
    }

    let result = eval(inputArea.value)

    inputArea.value = result.toLocaleString()
}

function squareRoot(event){
    let numberValue = Number(inputArea.value)
    inputArea.value = Math.sqrt(numberValue)
}