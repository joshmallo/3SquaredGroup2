const express = require('express'); //get the library
const app = express(); //create the application for the server
const router = express.Router();
const fs = require('fs');
app.use('/', router);

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

fetch('https://traindata-stag-api.railsmart.io/api/trains/tiploc/CREWEMD,WLSDEUT,LOWFRMT,WLSDRMT,CARLILE,MOSEUPY,STAFFRD,DONCIGB,THMSLGB,FLXSNGB/2023-02-12 00:00:00/2023-02-13 23:59:59', { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync('schedules.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log(data);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



  

  const jsonFile = require("./schedules.json");
  const train_url = `api/ifmtrains/schedule/${ActivationID}/${ScheduleID}`;

  var ScheduleID;
  var ActivationID;

  app.get('/', (req, res) => {
    for (let i = 0; i < data.length; i++)
    {
        
    }
  })
