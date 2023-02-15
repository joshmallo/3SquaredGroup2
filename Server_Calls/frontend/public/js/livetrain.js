let journeytiplocs = fetch("response.json")
    .then(r => r.json())
    .then(data => {
        var line = L.polyline([data[20].latLong.latitude, data[20].latLong.longitude], [data[21].latLong.latitude, data[21].latLong.longitude]),
                    animatedMarker = L.animatedMarker(line.getLatLngs());

                map.addLayer(animatedMarker);
                var animatedMarker = L.animatedMarker(line.getLatLngs(), {
                    distance: 300,  // meters
                    interval: 2000, // milliseconds
                });
            }
    )