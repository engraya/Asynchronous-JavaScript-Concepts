// Example 1
function displayMyresult(screen) {
    console.log(screen)
}

function calculateMyExpression(number1, number2, callBackfunction) {
    let product = number1 * number2
    callBackfunction(product)
}

calculateMyExpression(4, 7, displayMyresult);

// Example 2
const myListOfNmubers = [3,4,5,7,8,-6,-8,-19, 34,56,99,-67,-88,54,34,19]

let functionState = (x) => x>=10

const positiveArrayNumbers = removeNegativeNumbers(myListOfNmubers, functionState)

console.log(positiveArrayNumbers);

function removeNegativeNumbers(numbers, callBack) {
    const newArray = []
    for (const x of numbers) {
        if (callBack(x)) {
            newArray.push(x);
        }
    }
    return newArray
}

// Example 3 (Fetching a File form a server)

function displayToTheConsole(text) {
    console.log(text);
}

function getFile(myCallBackfunc) {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', "myFile.html");
    myRequest.onload = function() {
        if (myRequest.status == 200) {
            myCallBackfunc(myRequest.responseText);
        }
        else{
            myCallBackfunc("Error Ocurred Fetching the File from The Server" + myRequest.status);
        }
    }
    myRequest.send();
}

getFile(displayToTheConsole);
