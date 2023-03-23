// use this file to test geospatial features of the site

var current_location = turf.point([-77, 44]);
        var polygon = turf.polygon([[
        [-81, 41],
        [-81, 47],
        [-72, 47],
        [-72, 41],
        [-81, 41]
    ]]);
        console.log(turf.booleanPointInPolygon(current_location, polygon));


var x = document.getElementById("demo");

// going to use gps instead of ip
function getLocation() { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}