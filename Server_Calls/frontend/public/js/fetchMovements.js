// let journeytiplocs = fetch(`/Movements/:${tiploc}`)
//     .then(r => r.json())
//     .then(data => {
//         var line = L.polyline([data[20].latLong.latitude, data[20].latLong.longitude], [data[21].latLong.latitude, data[21].latLong.longitude]),
//                     animatedMarker = L.animatedMarker(line.getLatLngs());



//                 map.addLayer(animatedMarker);
//                 var animatedMarker = L.animatedMarker(line.getLatLngs(), {
//                     distance: 300,  // meters
//                     interval: 2000, // milliseconds
//                 });
//             }
//     )



//    "activationId": 17838662,
// "scheduleId": 14950042,,

//   "activationId": 17841792,
//   "scheduleId": 14220325,


var schedule =14220325;
var activation = 17838610;

// fetch(`/Movements/${activation}/${schedule}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log('here');
//     })

let gettiplocs = fetch(`/Movements/${activation}/${schedule}`)
    .then(r => r.json())
    .then(data => { console.log(data)})