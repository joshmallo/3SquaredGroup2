//setup
const { json, response } = require('express');
const express = require('express');
const app = express();

const { findPassingJourneys } = require('./Functions/getTraffic')
const { fetchTrainMovenents } = require('./Functions/getMovements')
const { find } = require('./Functions/check')


const port = 9050;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


const fs = require('fs');


app.get('/', (req, res) => {

    //
    res.sendFile('index.html');
})





const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

var dateStart = "2023-02-14";
var dateEnd = "2023-02-15";

var scheduleId = 13670358;
var activationId = 17836482;

var name = "CREWEMD"



findPassingJourneys(name, dateStart, dateEnd, headers, fs);
fetchTrainMovenents(scheduleId, activationId, headers, fs);

