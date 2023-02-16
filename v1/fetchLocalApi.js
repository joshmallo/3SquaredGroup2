//Fetch from local host API

import fs from 'fs';

function fetchSeverData() {
  fetch(`http://localhost:3000/api`)
  .then(res => res.json())
  .then(data => {
    fs.writeFileSync(`localData.json`, JSON.stringify(data, null, 2), 'utf-8');
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

fetchSeverData();