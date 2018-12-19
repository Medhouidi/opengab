function find() {

    var dis = localStorage.getItem("time")
    // var tim = localStorage.getItem("distance")
    // var cit = localStorage.getItem("city")
    var cit1 = localStorage.getItem("city1")
    var cit2= localStorage.getItem("city");
    var fare = localStorage.getItem("fare");

    var ride = JSON.parse(localStorage.getItem("ride"))
    console.log(ride);


    //document.getElementById("time").innerHTML += `<p class="time">${cit2}<br><br></p>`

   document.getElementById("cit2").innerHTML += `<p>${cit2}</p>`

    document.getElementById("cit1").innerHTML += `<p>${cit1}</p>`

    document.getElementById("wholedis").innerHTML += `<p>${ride.wholedis}Klm</p>`

    document.getElementById("wholetime").innerHTML += `<p>${ride.wholetime}min</p>`

    document.getElementById("fare").innerHTML += `<p>${fare}</p>`


 
    var registerdata= JSON.parse(localStorage.getItem("registerdata"));
    document.getElementById("t2").innerHTML+=`<p>${registerdata[0].username}</p>`

}




function accept() {
    var ride = JSON.parse(localStorage.getItem("ride"))
    ride.status = "your request has been accepted by paul walker";

    localStorage.setItem("ride",JSON.stringify(ride))

}

function refuse() {
    var ride = JSON.parse(localStorage.getItem("ride"))
    ride.status = "your request has been refused";

    localStorage.setItem("ride",JSON.stringify(ride))

}