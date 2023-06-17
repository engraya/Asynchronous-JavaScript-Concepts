function myFunction() {
    console.log("Just wait patiently for the result to display")
}

function myStatement() {
    console.log("I Really love you; and I love all abut JavaScript!!!!!!")
}

function myDecision(value) {
    console.log(value)
}

setTimeout(myFunction, 2000);
setTimeout(myStatement, 3000);
setTimeout(() => {myDecision("This is my Final Decision")}, 4000);