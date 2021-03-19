var months = prompt("Input Month, maximun of 31");
var days = prompt("Input Date, maximum of 12");
var years = prompt("Input Year");


var dater = new Date(parseInt(days), parseInt(years), parseInt(months)

);


document.getElementById("dater").innerHTML = dater.toDateString()