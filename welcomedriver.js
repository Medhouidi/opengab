function starttrip(){

    location.href= "welcomedrivertrip.html" ;
}



function previoustrip(){

    var ride = JSON.parse(localStorage.getItem("ride"))
    var cit1 = localStorage.getItem("city");
    
    
    var cit2= localStorage.getItem("city1");
    var fare=localStorage.getItem("fare");
    var registerdata= JSON.parse(localStorage.getItem("registerdata"));
    //console.log('regg', registerdata);
    document.getElementById("t").innerHTML += `<p class="time">${cit1}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${cit2}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${ride.wholedis}Klm&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${ride.wholetime}min&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${fare} </p>`
    
    //document.getElementById("t2").innerHTML+=`<p>${registerdata[2].username} &nbsp${registerdata[2].email}&nbsp${registerdata[2].phonenumber}&nbsp${registerdata[2].birthdate} </p>`
    
    }
    
    
    
    
    
    
    
     
    
    
    
    
    
    