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