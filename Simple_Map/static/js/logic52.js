// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

/// L5-2 Note:the GeoJSON data coordinates are set with the first parameter as X (longitude -xxx) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. 
/// The L.geoJSON()layer reverses the coordinates to plot them on the map.


///GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON()
///The options to add data to a marker are to use the pointToLayer or onEachFeature callback functions.

//Grabing our GeoJSON data.
L.geoJSON(sanFranAirport, {
       // We turn each feature into a marker on the map.
    //    pointToLayer: function(feature, latlng) {
    //     console.log(feature);
    //     return L.marker(latlng);
    //     .bindPopup("<h2>" + feature.properties.city + "</h2>")
    // }

    ///2. onEachFeature callback functions
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup();
    } 
}).addTo(map);

// We create the tile layer that will be the background of our map.
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  //id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streetmap.addTo(map);

