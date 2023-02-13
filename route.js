var route = [];

var response = fetch("response.json")
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty('latLong')) {
                var latlng = [item.latLong.latitude, item.latLong.longitude];
                route.push(latlng);
            }
        }
        new L.marker(route[0]).addTo(map)
        new L.marker(route[route.length - 1]).addTo(map)
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

