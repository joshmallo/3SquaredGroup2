//map initialization
// Initialize a map centered at (53, 12) at zoom level 5
var map = L.map('map').setView([51, -0.09], 8);

// Style URL format in XYZ PNG format; see our documentation for more options
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);