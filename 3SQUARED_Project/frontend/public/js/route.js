function route(e) {
    var route = [];
    var left = [];
    const headers = new Headers();
    headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
    headers.append('X-ApiVersion', '1');

    // console.log('https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/' + e.currentTarget.activationId + '/' + e.currentTarget.scheduleId);
    var lastVisitedTiploc;
    var response = fetch('https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/' + e.currentTarget.activationId + '/' + e.currentTarget.scheduleId, {headers: headers})
        .then(response => response.json())
        .then(data => {
            var i = 0;
            for (const item of data) {
                i++;
                if (item.hasOwnProperty('latLong')) {
                    var latlng = [item.latLong.latitude, item.latLong.longitude];
                    if (i < 22) {
                        route.push(latlng);
                    }
                    else if (i == 22) {
                        route.push(latlng);
                        left.push(latlng);
                    }
                    else {
                        left.push(latlng)
                    }
                }
                if (item.hasOwnProperty('latLong') && item.hasOwnProperty('departure') && (item != data[0] && item != data[data.length[-1]])) {
                    var marker = new L.marker([item.latLong.latitude, item.latLong.longitude], { icon: stationIcon })
                        .addTo(map)
                        .bindPopup(item.location);
                }
            }
            var fullRoute = route.concat(left);
            // var movingMarker = L.Marker.movingMarker([route[0], left[left.length - 1]],
            //     [5000]).addTo(map);
            // movingMarker.start();
            // console.log(fullRoute);
            new L.marker(route[0]).bindPopup(data[0].location).addTo(map);
            new L.marker(left[left.length - 1]).bindPopup(data[data.length - 1].location).addTo(map);
            const path = L.polyline.antPath(route, {
                "delay": 800,
                "dashArray": [
                    10,
                    20
                ],
                "weight": 5,
                "color": "#00FF00",
                "pulseColor": "#FFFFFF",
                "paused": false,
                "reverse": false,
                "hardwareAccelerated": true
            });
            map.addLayer(path);
            const path2 = L.polyline.antPath(left, {
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
            map.addLayer(path2);
        })

    var stationIcon = L.icon({
        iconUrl: '3SQUARED_Project/frontend/public/images/station.png',
        shadowUrl: '3SQUARED_Project/frontend/public/images/station.png',

        iconSize: [20, 13], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
    });

    var trainIcon = L.icon({
        iconUrl: '3SQUARED_Project/frontend/public/images/train.png',
        shadowUrl: '3SQUARED_Project/frontend/public/images/station.png',

        iconSize: [24, 24], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [0, 10], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [10, -15] // point from which the popup should open relative to the iconAnchor
    });
    // map.fitBounds(path);
}
