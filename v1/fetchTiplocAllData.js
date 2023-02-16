//Fetches all data from provided tip & dates

import fs from 'fs';

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//Dates as parameters?
var dateStart = "2023-02-1";
var dateEnd = "2023-02-15";

function fetchAllData(tiploc) {
  return fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
    .then(response => response.json())
    .then(data => {
      fs.writeFileSync(`trainsPassing${tiploc}.json`, JSON.stringify(data, null, 2), 'utf-8');
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

fetchAllData('CREWEMD')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });  


  








