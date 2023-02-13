const express = require('express');
const app = express();
const fs = require('fs');

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

var activation = 17832465;
var schedule = 14950458;
var tiploc = "CREWEMD";
var dateStart = "2023-02-12";
var dateEnd = "2023-02-13";



fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`movement${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`schedule${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`trainsPassing${tiploc}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });






