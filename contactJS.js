"use strict"


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