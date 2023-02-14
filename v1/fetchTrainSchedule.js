const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

fetch('https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/17831877/13660876', { headers: headers })  
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });