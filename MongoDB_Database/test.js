const mongoose = require("mongoose");
const Tiploc = require("./Tiploc");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/3SquaredProjectDB", (err) => { if (err) console.log(err); else {console.log('connected')}});
var db = mongoose.connection;
const fs = require('fs');


//vars needed for api calls

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

var dateStart = "2023-02-13";
var dateEnd = "2023-02-14";
var name;

Tiploc.find(function(err, Tiplocs) {
    if (err) {return console.error(err)};
    //console.log(Tiplocs);
    var i = 0;
    while(i < Tiplocs.length)
    {
        //console.log(Tiplocs[i].Name);
        var name = Tiplocs[i].Name;
        
        makeTiplocCall(name);
        setTimeout(5000);
        //increment i
        i++;
    }
 })



 function makeTiplocCall(name) 
 {
    fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${name}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
    .then(res => res.json())
    .then(data => {
    if (data.length == 0)
    {
        console.log(`${name} is empty`)
    }
    else
    {
        fs.writeFileSync(`./tiploc_data/${name}.json`, JSON.stringify(data, null, 2), 'utf-8', {});
    }


    })
.catch(error => { console.error('Error fetching data:', error); });

 }


