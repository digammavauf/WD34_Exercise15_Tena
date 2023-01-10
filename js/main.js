//alert("Hello World");
document.write("<h1>This is an additional text</h1>");

//alert(document.getElementById("para1").innerHTML);
document.getElementById("para1").innerHTML="I changed you!";

console.log("This goes to the debugger console");

let name="John Philip Tena";
//alert(name);
name="John";
//alert(name);

const anotherName="JP Tena";
//alert(anotherName);
//anotherName="This will raise error";

let varString="this is a series of characters in quotes";
let varNumber=13; //no quotes here
let varBoolean=true; //or false;
let varArray=["xbox","sony","nintendo",1+1,false];
//variables are loosely-typed

document.write(varArray);

function Adding2Numbers() {
    let firstNumber = 24;
    let secondNumber = 10;
    let sum = firstNumber + secondNumber;
    alert(sum);
}

function Subtracting2Numbers() {
    let firstNumber = 24;
    let secondNumber = 10;
    let difference = firstNumber - secondNumber;
    return difference;
}

let Multiplying2Numbers = () => {
    let firstNumber = Number(document.getElementById("firstNumber").innerHTML);
    let secondNumber = Number(document.getElementById("secondNumber").innerHTML);
    let product = firstNumber * secondNumber;
    alert(product);
}

const Dividing2Numbers = () => {
    let firstNumber = Number(document.getElementById("firstNum").value);
    let secondNumber = Number(document.getElementById("secondNum").value);
    let dividend = firstNumber / secondNumber;
    document.getElementById("result").innerHTML=dividend;
}

ExponentiateAB = () => {
    let firstNumber = Number(document.getElementsByClassName("numbers")[0].value);
    let secondNumber = Number(document.getElementsByClassName("numbers")[1].value);
    let result = firstNumber ** secondNumber;
    document.getElementById("result").innerHTML=result;
}

Modulo2Numbers = () => {
    let firstNumber = Number(document.getElementsByTagName("input")[0].getAttribute("value"));
    let secondNumber = Number(document.getElementsByTagName("input")[1].getAttribute("value"));
    let result = firstNumber % secondNumber;
    document.getElementById("result").innerHTML=result;
}

IncreaseBy1 = () => {
    let firstNumber = Number(document.getElementsByName("firstNo")[0].getAttribute("value"));
    let result = firstNumber++;
    document.getElementById("result").innerHTML=result;
}
