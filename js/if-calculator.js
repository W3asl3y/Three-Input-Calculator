//funcion to calculate the results
function calculate() {
    const inputOne = parseInt(document.getElementById("inputOne").value);
    const inputTwo = parseInt(document.getElementById("inputTwo").value);
    let op = document.getElementById("op").value;
    let result ;
    
    if (op === "+" || op === "-" || op === "*" || op === "/" ) {
        if (op === "+") {
             result = inputOne + inputTwo;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "+" + inputTwo + "=" + result ;
        } else if (op === "-") {
             result = inputOne - inputTwo;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "-" + inputTwo + "=" + result ;
        } else if (op === "*") {
             result = inputOne * inputTwo;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "*" + inputTwo + "=" + result ;
        } else if (op === "/") {
             result = inputOne / inputTwo;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "/" + inputTwo + "=" + result ;
        }
    } 
    else {
        console.log("Invalid operator")
        alert("It looks like you have entered the wrong operator. Please enter either one of the following + or - or * or /.")
    }
}