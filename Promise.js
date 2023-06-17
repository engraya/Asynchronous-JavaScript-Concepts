
// let myPromise = new Promise(function(myResolve, myReject) {
//     myResolve();
//     myReject(); 
//   });

//   myPromise.then(
//     fucntion(value) {Code if successful },
//     function(error) {Code if some error}
//   );


  // Examples
  //1
function consoleLogDisplayer(text) {
    console.log(text);
}
let fistPromise = new Promise(function(myResolve, myReject) {
    let coronaVirusYear = 2020;

    let currentDate = new Date();
    let currentDateYear = currentDate.getFullYear();

    if (currentDateYear < coronaVirusYear) {
        myResolve("We have Passed The corona Virus Year");
    }
    else{
        myReject("CoroVirus is still a Global Pandemic");
    }

});

fistPromise.then(
    function(value) {consoleLogDisplayer(value)},
    function(error) {consoleLogDisplayer(error)}
);


//2

function sayYourFavouriteLanguage(statement) {
    console.log(statement);
}

let secondPromise = new Promise((myResolve, myReject) => {
    const programmingLanguages = ['Python', 'Java', 'Ruby', 'JavaScript', 'PhP', 'C#', 'C']

    if (programmingLanguages[3] == 'JavaScript') {
        myResolve(`I Love ${programmingLanguages[3]}`)
    }
    else {
        myReject(`I hate all about ${programmingLanguages[3]}`)
    }
});

secondPromise.then(
    (value) => {sayYourFavouriteLanguage(value)},
    (error) => {sayYourFavouriteLanguage(error)}
);



// 3
let thirdPromise = new Promise((myResolve, myReject) => {
    setTimeout(() => {myResolve("Seni cok Seviyorum")}, 3000)
})
thirdPromise.then(
    (value) => {console.log(value)}
);


// 4 (Fetching a File From  a server)

function displayFetchedFile(fetchedData) {
    console.log(fetchedData);
}
let fetchedDataPromise = new Promise(function(myResolve, myReject) {
    let dataRequest = new XMLHttpRequest();
    dataRequest.open('GET', "newDataFile.html");
    dataRequest.onload = function() {
        if (dataRequest.status == 200) {
            myResolve("File Succesfully Found and Loaded" + dataRequest.response);
        }
        else{
            myReject("File Not Found, Try again Later")
        }
    };
    dataRequest.send();
}); 
fetchedDataPromise.then(
    function(value) {displayFetchedFile(value)},
    function(error) {displayFetchedFile(error)}
);



// function with .catch() and .finally()
function displayAlternativeFunction(someText) {
    console.log(someText);
}
let alternativePromise = new Promise(function(myResolve, myReject) {
    let number1 = 200;
    let number2 = 300;
    let sum = number1 + number2;
    let product = number1 * number2;

    if (sum == 500) {
        myResolve("The Assumption is Correct!")
    }
    else{
        myReject("Error Occured, The Assumption is Wrong!!!!")
    }
});

alternativePromise
.then(
    function(value) {displayAlternativeFunction(value)}
).catch(
    function(error) {displayAlternativeFunction(error)}
).finally(function(){console.log("Please Provide The Mathematical Solution")});