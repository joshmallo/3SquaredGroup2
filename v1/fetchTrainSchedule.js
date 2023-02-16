import fs from 'fs';
import data from './locationID.json' assert { type: "json" };

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//Schedule of one train 

function fetchTrainSchedule(activation, schedule, headers) {
  return fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
    .then(response => response.json())
    .then(data => {
      fs.writeFileSync(`scheduleBy${activation}${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

fetchTrainSchedule('17832465', '14950458', headers)
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data:', error);
}); 


//NOT WORKING** Loop through file to create new text file for each schedule

function loopSchedule() {
  for (let i = 0; i < data.length; i++) {
    var activation = data[i].activationId;
    var schedule = data[i].scheduleId;
    fetchTrainSchedule(activation, schedule)
  }
}

//loopSchedule();
