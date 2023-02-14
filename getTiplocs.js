const XLSX = require("xlsx");
const fs = require('fs');

// read file into memory
const workBook = XLSX.readFile("tiplocs.xlsx");
const workSheet = workBook.Sheets["Sheet1"];

const arrTiplocs = XLSX.utils.sheet_to_json(workSheet);

var tiploctemp = []

// loops through the data and appends it to an array
for (const tiploc of arrTiplocs) {
    tiploctemp.push(tiploc["TIPLOC"]);
}
console.log(tiploctemp) // array of tiplocs
const slicedArray = tiploctemp.slice(0, 50); // gets 100 tiplocs
console.log(slicedArray.toString()); // prints array as a string
console.log(slicedArray.length);

// gets the tiplocs with trains for that day
function getTiplocs(tiplocArray, date, tiplocsAtOnce) {
    const headers = new Headers();
    headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
    headers.append('X-ApiVersion', '1');
    for (let i = 0; i < tiplocArray.length; i += tiplocsAtOnce) {
        if ((i+tiplocsAtOnce) <= tiplocArray.length) {
            let temp = (tiplocArray.slice(i, i+tiplocsAtOnce)).toString(); // gets 25 tiplocs as strings
            fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${temp}/${date} 00:00:00/${date} 23:59:59`, { headers: headers })
            .then(res => res.json())
            .then(data => {
                fs.writeFileSync('test.json', JSON.stringify(data, null, 2), 'utf-8');
                console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
}

getTiplocs(slicedArray, '2023-02-14', 25);