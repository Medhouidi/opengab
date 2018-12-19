


var x = localStorage.getItem("long");

var x1= localStorage.getItem("lat");

var y= localStorage.getItem("long1");

var y1 = localStorage.getItem("lat1");
//console.log("y1",y1);
var monastir = [x1, x];
var sousse = [y1, y];
var map = L.map('map').setView(monastir, 8);
L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
    maxZoom: 30,
}).addTo(map);

var marker = L.marker(monastir).addTo(map);
var marker = L.marker(sousse).addTo(map);




var latOrigin0 = "";
var longOrigin0 = "";
var latOrigin1 ="";
var longOrigin1 = "";


var ride = JSON.parse( localStorage.getItem("ride"));
document.getElementById("status").innerHTML = ride.status;




function country() {

          
        var city = document.getElementById("c").value;
        var city1 = document.getElementById("c1").value;

        var town = " https://api.opencagedata.com/geocode/v1/json?q=" 
        + city + "&key=79dd850d262e4f7eb45a0ac64700216b "
        
        var town1 = " https://api.opencagedata.com/geocode/v1/json?q=" 
        + city1 + "&key=79dd850d262e4f7eb45a0ac64700216b "

        
        var cities= localStorage.setItem("city",city);
        var cities1= localStorage.setItem("city1",city1);

        $.get(town, function (data) {

            //console.log('corrdinate data', data.results[0].geometry);
            latOrigin0 = data.results[0].geometry.lat;
            longOrigin0 = data.results[0].geometry.lng;
          // console.log("latOrigin0", latOrigin0);
           //console.log("longOrigin0" , longOrigin0);
            
            localStorage.setItem("lat",latOrigin0);
            localStorage.setItem("long",longOrigin0);
        })
        

        $.get(town1, function (data) {

            //console.log('corrdinate data', data.results[0].geometry);
            latOrigin1 = data.results[0].geometry.lat;
            longOrigin1 = data.results[0].geometry.lng;
            //console.log("latOrigin1" + latOrigin1);
           // console.log("longOrigin1" + longOrigin1);

            localStorage.setItem("lat1",latOrigin1);
            localStorage.setItem("long1",longOrigin1);
            
        })

        

        var distance="";
        var time =0 ;
        

        
        $.get(" https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=" 
        + latOrigin0 
        + "," 
        + longOrigin0 
        + "&destinations=" 
        + latOrigin1 
        +"," 
        +longOrigin1 
        + "&travelMode=driving&key=AuLRTinA9jfENtT2BfmwTdyNJKwl4lBBJg-NwEsro9h1Py0jELlT8Q5Vh85stVPK ",
         function (data) { 
            //console.log('my data', data);


            distance=data.resourceSets[0].resources[0].results[0].travelDistance;

            var wholedis= distance.toFixed();
            localStorage.setItem("wholedis",wholedis);
            //console.log("ww",wholedis);
            
            time=data.resourceSets[0].resources[0].results[0].travelDuration;

            var hourstime= time / 60 ;
            var wholetime=hourstime.toFixed(2);
            //console.log("ffff",wholetime);
            //console.log("hourtime",hourstime);

            //console.log(distance);
            //console.log(time);
        
        

            

            distance=JSON.stringify(wholedis);
            var d=document.getElementById("wholedis").innerHTML+=`<p>${distance}Klm </p>`

            time=JSON.stringify(wholetime);
            var t=document.getElementById("wholetime").innerHTML+=`<p style="color:blue;" >${wholetime}min</p>`


            var ride = {
                wholetime : wholetime,
               wholedis : wholedis,
                status : "Your request will be treated <br> as long as we find a driver for you"
            }
             localStorage.setItem("ride",JSON.stringify(ride));


        })

    
fare();
   
}



function fare(){

    var getdis= localStorage.getItem("wholedis");
   // document.getElementById("b").innerHTML+=`<p>${getdis}</p>`;

    var priceperunit = 5
    var marginprofit= 0.5 
    var price= (priceperunit + marginprofit) * getdis;
    
    

    price=JSON.stringify(price);
    var p=document.getElementById("price").innerHTML+=`<p>${price}</p>`;

    localStorage.setItem("fare",price);  

}





















/*274aa478c5e54c4fbc7f84b01bc97a6d*/