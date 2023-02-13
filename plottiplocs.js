let response = fetch("response.json")
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty('latLong')) {
                var marker = new L.marker([item.latLong.latitude, item.latLong.longitude]).addTo(map)
                marker.bindPopup(item.location);
            }
        }
    })