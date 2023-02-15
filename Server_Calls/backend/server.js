const express = require ('express');
const app = express(); //initialise the server
const path = require('path');
const port = 12345;
const fs = require('fs');
//static asset directories
app.use(express.static(__dirname + '/..' + '/frontend' + '/public'))
app.use(express.static(__dirname + '/..' + '/frontend' + '/webpage'))
app.use(express.static(__dirname + '/CallAPIFunctions'))
const movements = require('./CallAPIFunctions/getMovements')

//needed to make API calls
const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');
var dateStart = "2023-02-14";
var dateEnd = "2023-02-15";

//returns index.html
app.get('/', (req, res) => 
{
  res.sendFile(path.join(__dirname, '..', 'frontend', 'webpage', 'index.html'));
})

//endpoints for API calls
app.get('/APICall/:tiploc', (req, res) => 
{
  console.log('sent')
  var tiploc =(req.params.tiploc);
  console.log(tiploc)
})


app.get('/Movements/:activation/:schedule', (req, res) => 
{
  var activation = req.params.activation;
  var schedule = req.params.schedule;
  //console.log(activation + schedule)
  fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                    console.log('in 1st fetch')
                    fs.writeFileSync(`./${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
                    console.log('finished 1st fetch')
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
})
app.get('/TIPLOCs', (req, res) => 
{
  console.log('sent')
})


app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})