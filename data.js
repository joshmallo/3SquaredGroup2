//Example call

const fs = require('fs');

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//change call date 
fetch('https://traindata-stag-api.railsmart.io/api/trains/tiploc/CREWEMD,WLSDEUT,LOWFRMT,WLSDRMT,CARLILE,MOSEUPY,STAFFRD,DONCIGB,THMSLGB,FLXSNGB/2023-02-12 00:00:00/2023-02-13 23:59:59', { headers: headers })  
  .then(res => res.json())
  .then(data => {
    //change file name 
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log(data);
  // Print only ID or TIPLOCs
//     for (let i = 0; i < data.length; i++) {
//       console.log(`Activation ID: ${data[i].activationId}, Schedule ID: ${data[i].scheduleId}`);
//       console.log(`Origin: ${data[i].originTiploc}, Destination: ${data[i].destinationTiploc}`);
//     }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
