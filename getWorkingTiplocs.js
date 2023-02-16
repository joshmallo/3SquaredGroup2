const XLSX = require("xlsx");
const fs = require('fs');

const jsonFile = require("./allTiplocs.json");
console.log(jsonFile);

slicedArray = jsonFile.slice(0,50);

// gets the tiplocs with trains for that day
/* function getTiplocs(tiplocArray, date, tiplocsAtOnce) {
    let createNew = true;
    const headers = new Headers();
    headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
    headers.append('X-ApiVersion', '1');
    let temp;
    for (let i = 0; i < tiplocArray.length; i += tiplocsAtOnce) {
        if ((i+tiplocsAtOnce) <= tiplocArray.length) {
            temp = (tiplocArray.slice(i, i+tiplocsAtOnce)).toString(); // gets 25 tiplocs as strings
        } else {
            temp = (tiplocArray.slice(i, tiplocArray.length)).toString(); // gets the remainding tiplocs
        }
        fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${temp}/${date} 00:00:00/${date} 23:59:59`, { headers: headers })
        .then(res => res.json())
        .then(data => {
            if (data.length != 0) {
                //var dict = {"Location" : data[0].originLocation,
                //"Tiploc" : data[0].originTiploc}
                //console.log(data[0].originLocation + "/" + data[0].originTiploc);
                //console.log(data[0].destinationLocation + "/" + data[0].destinationTiploc);
                delete data[0]["originTiploc"];
                console.log(data[0]);
                if (createNew) {
                    createNew = false;
                    console.log(data);
                    fs.writeFileSync('test.json', JSON.stringify(data, null, 2), 'utf-8');
                }
                else {
                    fs.appendFileSync('test.json', JSON.stringify(data, null, 2), 'utf-8');
                }
            }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
} */

function getWorkingTiplocs(tiplocArray, tiplocsAtOnce, startDate, endDate, headers) {
    let createNew = true;
    let temp;
    let workingTiplocs;
    for (let i = 0; i < tiplocArray.length; i += tiplocsAtOnce) {
        
        if ((i+tiplocsAtOnce) <= tiplocArray.length) {
            temp = (tiplocArray.slice(i, i+tiplocsAtOnce)).toString(); // gets 25 tiplocs as strings
        } else {
            temp = (tiplocArray.slice(i, tiplocArray.length)).toString(); // gets the remainding tiplocs
        }
        fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${temp}/${startDate} 00:00:00/${endDate} 23:59:59`, { headers: headers })
        .then(res => res.json())
        .then(data => {
            if (data.length != 0) {
                for (let k = 0; k < data.length; k++) {
                    const originLocation = data[k].originLocation;
                    const originTiploc = data[k].originTiploc;
                    data[k] = {originLocation, originTiploc};
                }
                if (createNew) {
                    createNew = false;
                    workingTiplocs = data;
                }
                else {
                    workingTiplocs = workingTiplocs.concat(data);
                }
                fs.writeFileSync('tiplocs.json', JSON.stringify(workingTiplocs, null, 2), 'utf-8')
            }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

// 25 is the max tiplocs you can call at once
getWorkingTiplocs(jsonFile, 25, '2023-02-16', '2023-02-16', headers);