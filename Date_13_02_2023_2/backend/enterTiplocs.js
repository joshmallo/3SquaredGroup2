const express = require('express');
const app = express();
const fs = require('fs');

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');


var tiploc = 'DONCIGB';



fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/2023-02-05 00:00:00/2023-02-06 23:59:59`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync('locationNames.json', JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

