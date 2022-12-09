// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);
//let map = L.map('mapid').setView([40.7, -94.5], 4);    --> whole USA map
//let map = L.map('mapid').setView([34.0522, -118.2437], 14); --- LA 
console.log(map);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

/// number of after longitude & latitude is zoom level on the setView() method

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillcolor: '#ffffa1'
// }).addTo(map);

// An array containing each city's location, state, and population. --> cut and placed to cities.js file
// Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius: city.population/100000  
//   })    
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
//  });

// We create the tile layer that will be the background of our map.
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  //id: "mapbox/streets-v11",
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streetmap.addTo(map);



