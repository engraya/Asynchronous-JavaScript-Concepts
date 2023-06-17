function diplayMyDateFormat() {
    let newDate = new Date()
    console.log(
        newDate.getFullYear() + "|" + newDate.getMonth() + "|" + newDate.getDay() +  "|" + newDate.getHours() +
        "|" + newDate.getMinutes() + "|" + newDate.getSeconds()
    )
}

//setInterval(diplayMyDateFormat, 1000);
