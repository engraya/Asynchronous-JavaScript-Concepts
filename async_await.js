// Normal Function with Return Statement
function normalReturnText() {
    return console.log("I am Learning JavaScript")
}
normalReturnText();


// Function with a Promise
function promiseFunction() {
    let statment = Promise.resolve("JavaScript is the Best Programming Language in the world")
    return console.log(statment)
}

promiseFunction();



// Function with Async Keyword
function displayerFunction(myText) {
    console.log(myText);
}

async function asynchronousFunction() {
    return "JavaScript is the Genesis of web development"
};

asynchronousFunction().then(
    function(value) {displayerFunction(value)},
    function(error) {displayerFunction(error)}
);


// Function with await Keyword
async function developerDay() {
    let developerPromise = new Promise(function(myResolve, myReject) {
        const country = {name : "Nigeria", language : "English", religion : "Islam", resource : "Agriculture"}

        if (country.religion == "Islam") {
            myResolve("Nigeria is an Islamic Country")
        }
        else{
            myReject("Nigeria is not an Isamic Country")
        }
    });
    let myFinalStatement = await developerPromise;
    
    console.log(myFinalStatement)
}

developerDay();



// TimeOut Function with async and await
async function displayAfterSomeTime() {
    let displayPromise = new Promise(function(myResolve) {
        function dipslayMe() {
            return console.log("I am programer")
        }
    setTimeout(dipslayMe, 3000);
    });
    let displayStatement = await displayPromise
    console.log(displayStatement)
}
displayAfterSomeTime();



// Fetching a file with Async and Await
async function fetchFileFunction() {
    let fetchFileFunctionPromise = new Promise(function(myResolve, myReject) {
        let fetchRequest = new XMLHttpRequest();
        fetchRequest.open('GET', "myFetchFile.html")
        fetchRequest.onload = function() {
            if (fetchRequest.status == 200) {
                myResolve("File sUCCESSFULLY fOUNF WITH GOOD Connection")
            }
            else{
                myReject("OOOPS!!.. fILE nOT found, Try Again later")
            }
        };
        fetchRequest.send();
    });
    let returnFetchStatement = await fetchFileFunctionPromise;
    console.log(returnFetchStatement) 
}
fetchFileFunction();



// ASync Await with try-catch-finally statement
async function displayMyProfession() {
    let demoDisplayPromise = new Promise(function(myResolve, myReject) {
        try {
            let myProfile = {name : "Ahmad", age : 25, nationality : "Nigeria", profession : "Engineer"}
            if (myProfile.profession == "Engineer") {
                let successMessage = console.log("Correct, I am an Engineer")
                myResolve(successMessage)
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            console.log("Congratulations, You are now a Programmer!!!!")
        }
    });

    let finalStatement = await demoDisplayPromise;
    console.log(finalStatement);
}

displayMyProfession();
