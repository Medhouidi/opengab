function check(){


   var localdata = JSON.parse(localStorage.getItem("registerdata")) ;


var email= document.getElementById("l1").value;
var password = document.getElementById("l2").value;

    for ( i=0; i<localdata.length; i++){
        
        if ( localdata[i].email == email && localdata[i].password == password )
        
        location.href="test3.html";
    
        }


}