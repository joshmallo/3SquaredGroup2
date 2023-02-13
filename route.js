var latlngs = [];

var response = fetch("response.json")
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty('latLong')) {
                var latlng = [item.latLong.latitude, item.latLong.longitude];
                latlngs.push(latlng);
            }
        }
        new L.marker(latlngs[0]).addTo(map)
        new L.marker(latlngs[latlngs.length - 1]).addTo(map)
        var polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map);
        map.fitBounds(polyline.getBounds());
    })

