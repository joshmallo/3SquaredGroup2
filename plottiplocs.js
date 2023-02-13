//Custom Station & Train Icons @gcagriffin
var stationIcon = L.icon({
    iconUrl: 'station.png',
    shadowUrl: 'station.png',

    iconSize: [20, 13], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [0, -2], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
});

var trainIcon = L.icon({
    iconUrl: 'train.png',
    shadowUrl: 'train.png',

    iconSize: [24, 24], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [0, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
});

let r = fetch("response.json")
    .then(r => r.json())
    .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty('latLong') && item.hasOwnProperty('departure') && (item != data[0] && item != data[data.length[-1]])) {
                var marker = new L.marker([item.latLong.latitude, item.latLong.longitude], { icon: stationIcon })
                    .addTo(map)
                    .bindPopup(item.location);
            }
        }
    })