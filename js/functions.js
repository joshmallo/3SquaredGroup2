function expandMenu(e){
    var secondMenu = document.getElementById('secondMenu');
    secondMenu.style.display = 'inline';
    const headers = new Headers();
    headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
    headers.append('X-ApiVersion', '1');
    // var tiploc = e.currentTarget.id;
    var tiploc = 'THMSLGB';
    var date = new Date().toISOString();
    date = date.substring(0, date.length - 14);
    fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/${date} 00:00:00/${date} 23:59:59`, {headers: headers})
        .then (res => res.json())
        .then (data => {
            var container = document.getElementById('secondMenuItems');
            var loading = document.createElement('p');
            loading.innerHTML = 'Loading...';
            loading.style.fontSize = '14px';
            loading.style.textAlign = 'center';
            loading.style.color = '#808080';
            container.append(loading);
            for (const item of data) {
                var p = document.createElement('p');
                p.innerHTML = item.originLocation + ' - ' + item.destinationLocation;
                p.activationId = item.activationId;
                p.scheduleId = item.scheduleId;
                p.style.fontSize = '14px';
                p.addEventListener("click", journeyClicked);
                p.classList.add('menuOptions');
                container.append(p);
            }
            container.removeChild(loading); 
        })
}

function closeSecondMenu(){
    secondMenu.style.display = 'none';
}

function journeyClicked(e){
    closeSecondMenu();
    map.eachLayer(function(layer){
        if (layer != Location.tileLayer){
        map.removeLayer(layer);
        }
    })
    addTileLayer();
    route(e);
}