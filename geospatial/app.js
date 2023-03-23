// use this file to test geospatial features of the site
// going to use gps instead of ip


// var grainger_center = turf.point([-89.4016, 43.0727]);
// var grainger = turf.buffer(grainger_center, 0.2, {units: 'miles'});


var gphi_center = turf.point([-89.3950, 43.0760]);
var gphi = turf.buffer(gphi_center, 0.2, {units: 'miles'});


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
  
  if (turf.booleanPointInPolygon(my_location, gphi)) {
    x.innerHTML = "You're at GPhi";
  }
  // else if (turf.booleanPointInPolygon(my_location, grainger)){
  //   x.innerHTML = "You're at Grainger";
  // }
  else {
    x.innerHTML = "You're not at GPhi";
  }

}


