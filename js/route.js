var route = [];
var left = [];

var response = fetch("response.json")
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty('latLong')) {
                var latlng = [item.latLong.latitude, item.latLong.longitude];
                route.push(latlng);
            }
            if (item.hasOwnProperty('latLong') && item.hasOwnProperty('departure') && (item != data[0] && item != data[data.length[-1]])) {
                var marker = new L.marker([item.latLong.latitude, item.latLong.longitude], { icon: stationIcon })
                    .addTo(map)
                    .bindPopup(item.location);
            }
        }
        new L.marker(route[0]).bindPopup(data[0].location).addTo(map);
        new L.marker(route[route.length - 1]).bindPopup(data[data.length - 1].location).addTo(map);
        const path = L.polyline.antPath(route, {
            "delay": 800,
            "dashArray": [
                10,
                20
            ],
            "weight": 5,
            "color": "#0000FF",
            "pulseColor": "#FFFFFF",
            "paused": false,
            "reverse": false,
            "hardwareAccelerated": true
        });
        map.addLayer(path);
    })

var stationIcon = L.icon({
    iconUrl: 'assets/station.png',
    shadowUrl: 'assets/station.png',

    iconSize: [20, 13], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [0, -2], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
});

var trainIcon = L.icon({
    iconUrl: 'assets/train.png',
    shadowUrl: 'assets/train.png',

    iconSize: [24, 24], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [0, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
});

