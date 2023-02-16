//import data from './schedules.json' assert {type:'JSON'};

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

var url = [];
//Fetch Train Schedules (defunct, for now)

fetch("./json/schedules.json", 
{ headers: headers })  
    .then(res => res.json())
    .then(data => {
        //for(const item of data) {
            //var schdl = [item.ActivationID, item.ScheduleID]
            //arrSchedule.push(schdl);
            //Extract ScheduleID and ActivationID to JSON file
            const obj = JSON.stringify(data, null, 2);
            var jobj = JSON.parse(obj);
            var geturl = jobj.activationID + '/' + jobj.scheduleID;
            url.push(geturl);
            //url.push(getUrl);
            /*var schedule = {
                activationID : item.activationID,
                scheduleID : item.scheduleID,
                url : item.activationID = "/" + item.scheduleID
            }
            /*schedules = url;
            console.log(schedules);
            const FileSystem = require('fs');
            FileSystem.writeFile('./schedules.json', JSON.stringify(schedule, null, 2), 'utf-8'), err => {
                if(err) throw err;
            }*/
        //}
    });
    
var tiploc = 'IVRNESS';
var journeys = [];
console.log(url[0]);
var moves = ['17832809/13669873','17833820/14224567', '17833260/13670151', '17834026/14555023', '17833468/14222281'];  
//Fetch Train Movements
{//done manually for now, this will be changed later
fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${moves[4]}`,{ headers: headers })
//fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${arrSchedule[i].ActivationID}/${arrSchedule[i].ScheduleID}`,{ headers: headers })
//fetch('./schedules.json')
    .then(res => res.json())
    .then(data => {
        var latlngs = [];
        var jstring = JSON.stringify(data, null, 2);
        var parseString = JSON.parse(jstring);
        for (const item of parseString) {
            if (item.hasOwnProperty('latLong')) {
                var latlng = [item.latLong.latitude, item.latLong.longitude];
                latlngs.push(latlng);
                //Display stations
                if(!item.hasOwnProperty('pass')) {
                    var marker = new L.marker([item.latLong.latitude, item.latLong.longitude], {icon:stationIcon})
                        .addTo(map)
                        .bindPopup(item.location + " (" + item.tiploc + ")");
                }
                /*if(item.hasOwnProperty('arrival') && !item.hasOwnProperty('departure')){
                    count++;
                }*/
            }
        var polyline = L.polyline([latlngs], { color: 'grey' }).addTo(map);
        map.fitBounds(polyline.getBounds());
        }
        
        //app.listen(port,() =>{}
    });
}