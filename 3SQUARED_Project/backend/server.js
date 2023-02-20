const express = require ('express');
const app = express(); //initialise the server
const path = require('path');
const port = 12345;
const getWorkingTiplocs = require('./getWorkingTiplocs')
const jsonFile = require("./allTiplocs.json");

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

//static asset directories
app.use(express.static(__dirname + '/..' + '/frontend'))
app.use(express.static(__dirname + '/..' + '/backend'))

app.get('/', (req, res) => 
{
  //getWorkingTiplocs(jsonFile, 25, '2023-02-16', '2023-02-16', headers)
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
})


app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})