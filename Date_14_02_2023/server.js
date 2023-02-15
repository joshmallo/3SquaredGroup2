const express = require('express'); //get the library
const app = express(); //create the application for the server
const path = require('path');
const router = express.Router();
const http = require('http');
const https = require('https');
const { json } = require('body-parser');
const fs = require('fs');
app.use('/', router);


const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

/*fetch('https://traindata-stag-api.railsmart.io/api/trains/tiploc/CREWEMD,WLSDEUT,LOWFRMT,WLSDRMT,CARLILE,MOSEUPY,STAFFRD,DONCIGB,THMSLGB,FLXSNGB/2023-02-12 00:00:00/2023-02-13 23:59:59', { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync('test.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log(data);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/

  app.get('/Call', (req, res) => 
setInterval(() => {
    fetch('https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/17832329/13669579', { headers: headers })
    .then(res => res.json())
    .then(data => {
      //What do we want done with the data?
      //fs.writeFileSync('test.json', JSON.stringify(data, null, 2), 'utf-8');
      //console.log(data);
      for (let i = 0; i < data.length; i++)
       {
 
        console.log('location: ' + data[i].location);
        console.log('latitude: ' + data[i].latLong.latitude);
        console.log('longitude: ' + data[i].latLong.longitude);

        var loc = data[i].location;
        var lat = data[i].latLong.latitude;
        var long = data[i].latLong.longitude;
        var obj = new Object();
        obj.location = loc;
        obj.latitude = lat;
        obj.longitude = long;
        var jsonObj = JSON.stringify(obj);
        fs.writeFileSync('test.json', jsonObj, 'utf-8', {flag:'a'});

        console.log('\n\n');
      }
      console.log('\n\n\n\n');
      //console.log(data[0].latLong);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }, 10000);
}));






app.listen(process.env.port || 3000);

console.log("running on port 3000");