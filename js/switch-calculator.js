//funcion to calculate the results
function calculate() {
    const inputOne = parseInt(document.getElementById("inputOne").value);
    const inputTwo = parseInt(document.getElementById("inputTwo").value);
    const op = document.getElementById("op").value;
    let result;

    switch(op) {
        case "+": 
            result = inputOne + inputTwo ;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "+" + inputTwo + "=" + result ;
        break;
        case "-": 
            result = inputOne - inputTwo ;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "-" + inputTwo + "=" + result ;
        break;
        case "*": 
            result = inputOne - inputTwo ;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "*" + inputTwo + "=" + result ;
        break;
        case "/":
            result = inputOne + inputTwo ;
            console.log("You calculated " + result);
            document.getElementById("answer").innerHTML = "You calculated  " + inputOne + "/" + inputTwo + "=" + result ;
        break;
        default:
            console.log("Invalid operator")
            alert("It looks like you have entered the wrong operator. Please enter either one of the following + or - or * or /.")
    }
}