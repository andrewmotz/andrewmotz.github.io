"use strict"

// Validate Form
document.getElementById("submitButton").addEventListener("click", validateForm);

function validateForm(){
    var InputArray = new Array();
    InputArray.push(document.getElementById("Name"));
    InputArray.push(document.getElementById("Email"));

    for (let i = 0; i < InputArray.length; i++) {
        var element = InputArray[i];
        if(!element.checkValidity()){
            alert("The input " + "\"" + element.value + "\"" + " for \"" + element.id +  "\" is not a valid entry.");
            element.focus();
        }
    }
}

//Put the current time on form
window.addEventListener("load", setTime);
var currentTimeElement = window.document.getElementById("currentTime");
currentTimeElement.style = "font-size:small; margin:0;font-style:italic;";

function setTime(){
    var HTMLcode = "Current Date and Time: ";
    var todayDate = new Date();
    HTMLcode += todayDate.toLocaleString();
    
    document.getElementById("currentTime").innerHTML = HTMLcode;
}