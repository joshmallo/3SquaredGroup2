import fs from 'fs';
import data from './locationID.json' assert { type: "json" };

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//Movement of one train 

function fetchTrainMovement(activation, schedule) {
  return fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fs.writeFileSync(`movementBy${activation}${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

fetchTrainMovement('17832465', '14950458')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  }); 


//NOT WORKING** Loop through file to create next text file for each movement

function loopMovement() {
  for (let i = 0; i < data.length; i++) {
    var activation = data[i].activationId;
    var schedule = data[i].scheduleId;
    fetchTrainMovement(activation, schedule)
  }
}

//loopMovement();


