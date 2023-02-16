//map initialization
var map = L.map('map').setView([53.226026, -1.425414],6);
    // Style URL format in XYZ PNG format; see our documentation for more options
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

    //Custom Station & Train Icons @gcagriffin
var stationIcon = L.icon({
    iconUrl: './assets/station.png',
    shadowUrl: './assets/station.png',

    iconSize:     [20, 13], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [10, 5], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});

var trainIcon = L.icon({
    iconUrl: 'train.png',
    shadowUrl: 'train.png',
    iconSize:     [24, 24], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [0, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow    popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});