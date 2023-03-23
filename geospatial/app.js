// use this file to test geospatial features of the site
// going to use gps instead of ip


var hub_center = turf.point([-89.3956, 43.0744]);
var hub = turf.buffer(hub_center, 0.25, {units: 'miles'});

var x = document.getElementById("demo");


function getLocation() { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function myPosition(position) {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  my_location = turf.point([long, lat]);

  if (turf.booleanPointInPolygon(my_location, hub)) {
    x.innerHTML = "You're in the Hub"
  }

}

// var hub_center = turf.point([-89.3956, 43.0744]);
// var hub = turf.buffer(hub_center, 0.25, {units: 'miles'});