function main() {
    if (username() && birthdate() && phonenumber() && email() && password()) {
        submit();
        location.href = "login.html";
    }
}

function account(){

    location.href = "login.html";

    }
    

function username() {

    var username = document.getElementById("f1").value;
    var empty = ' ';

    if (username.includes(empty)) {

        console.log("wrong");
        return false;
    }
    else {
        console.log("access");
        return true;
    }
}

function birthdate() {
    var birth = document.getElementById("f4").value;


    var today = new Date();
    var birthDate = new Date(birth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    if (age > 10) {
        console.log("access");
        return true;
    }
    else {
        console.log("your age is under 10");
        alert("your age is under 10");
        return false;
    }
}



function phonenumber() {

    var phonenumber = document.getElementById("f5").value;
    if (phonenumber.length == 8) {

        return true;
    }
    else {

        return false;
    }
}

function email() {

    var email = document.getElementById("f2").value;
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailformat)) {

        return true;
    }
    else {

        return false;
    }
}


function password() {
    var password = document.getElementById("f3").value;

    if (character(password) && number(password) && uppercase(password)) {

        console.log("access");
        return true;
    }
    else {

        console.log("not access");
        return false;
    }
}




function number(chiffre) {

    var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (i = 0; i < chiffre.length; i++) {

        if (number.includes(chiffre[i])) {
            console.log("number true");
            return true;
        }
    }
    return false;
}



function character(specialchar) {

    var char = ['-', '_', '#', '&', '='];
    for (i = 0; i < specialchar.length; i++) {

        if (char.includes(specialchar[i])) {
            console.log("character true");

            return true;
        }
    }
    return false;
}


function uppercase(upper) {

    for (i = 0; i < upper.length; i++) {
        if (upper[i] == upper[i].toUpperCase()) {
            console.log("upper true");

            return true;
        }
    }
    return false;
}




function submit() {

   

    var registerdata = {

        username: document.getElementById("f1").value,
        password: document.getElementById("f3").value,
        email: document.getElementById("f2").value,
        phonenumber: document.getElementById("f5").value,
        birthdate: document.getElementById("f4").value,

    }

    var localdata = JSON.parse(localStorage.getItem("registerdata")) || [];

    localdata.push(registerdata);



    localStorage.setItem("registerdata", JSON.stringify(localdata));



}









