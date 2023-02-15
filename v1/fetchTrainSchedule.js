import fs from 'fs';
import data from './locationID.json' assert { type: "json" };

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//Fetches schedule for specified ID's

var activation = 17832465;
var schedule = 14950458;

fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
.then(res => res.json())
.then(data => {
  fs.writeFileSync(`schedule${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
})
.catch(error => {
  console.error('Error fetching data:', error);
});


//Fetches schedule for all objects from tiploc

// for (let i = 0; i < data.length; i++) {
//   var activation = data[i].activationId;
//   var schedule = data[i].scheduleId;
//   fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
//     .then(res => res.json())
//     .then(data => {
//     console.log(data);
//   })
//     .catch(error => {
//     console.error('Error fetching data:', error);
// });
// }

// fs.writeFileSync(`movementByTipLoc.json`, JSON.stringify(data, null, 2), 'utf-8');