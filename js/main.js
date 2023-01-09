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
    let firstNumber = parseFloat(document.getElementById("firstNumber").innerHTML);
    let secondNumber = parseFloat(document.getElementById("secondNumber").innerHTML);
    let product = firstNumber * secondNumber;
    alert(product);
}

function Dividing2Numbers() {
    let firstNumber = parseFloat(document.getElementById("firstNum").value);
    let secondNumber = parseFloat(document.getElementById("secondNum").value);
    let dividend = firstNumber / secondNumber;
    document.getElementById("result").innerHTML=dividend;
}

