import fs from 'fs';

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

function fetchData(tiploc, dateStart, dateEnd, headers) {
  return fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
    .then(response => response.json())
    .then(data => {
      //Only returns needed attributes  
      for (let i = 0; i < data.length; i++) {
        const originTiploc = data[i].originTiploc;
        const destinationTiploc = data[i].destinationTiploc;
        const activationId = data[i].activationId;
        const scheduleId = data[i].scheduleId;
        data[i] = { originTiploc, destinationTiploc, activationId, scheduleId };
      }
      fs.writeFileSync(`locationID.json`, JSON.stringify(data, null, 2), 'utf-8');
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

//Example 

fetchData("CREWEMD", "2023-02-1", "2023-02-15", headers)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });  
