//reuired functionality
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('js'));
app.use(express.static('assets'));


//for API calls
const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');


//variables needed
var dateStart = "2023-02-14";
var dateEnd = "2023-02-15";

var scheduleId;
var activationId;

const port = 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) =>
 {
    res.sendFile(path.join(__dirname + 'index.html'));
})