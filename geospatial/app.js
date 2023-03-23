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

const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);