

//google maps api

var cityDesitination = "NYC";
var stateDesitination = "NY";


retrieveLocation(cityDesitination, stateDesitination).then(handleGoogleMapResult)    

//}) 
//setting up function to retrieve the location for the ajax call
function retrieveLocation(cityDesitination, stateDesitination) {
    var queryURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityDesitination)},${encodeURIComponent(stateDesitination)}&key=AIzaSyA0HQaRbr6NXHKenj20jrG3CoOFqBU5j5I`;
    //ajax call for google maps API
    return $.ajax({
        url: queryURL,
        method: "GET",
    })
}
//function to pass our ajax call response into handleGoogleMapsResult
function handleGoogleMapResult(response) {
    console.log(JSON.stringify(response, null, 2))
}


var latitude = 50;
var longitude = 34.0522;
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latitude, lng: longitude},
      zoom: 4,
    });

}
