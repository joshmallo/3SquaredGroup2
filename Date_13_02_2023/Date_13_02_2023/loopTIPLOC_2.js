//the setup for the server

const { json, response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');

const port = 9050;

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});



/**
 * Here is where the tiplocs are checked to see if they return information.
 * If they do, the data is written to a file and stored in './trains'
 * This will be used to get the activation/schedule IDs
*/

example: 
var TIPLOCs = ["CREWEMD", "AACHEN","ABHLJN", "ABHL811", "ABHLTB", "ABWD", "ABWDARJ", "ABWDXR", "ABWDXRS", "ABWDER","ABTSWDJ","ABTS654","ABER","ABARASQ","ABRBEG","ABCWM", "ABCWMPI"];
TIPLOCs.push("ABCWMPO");
TIPLOCs.push("STAFFRD");
TIPLOCs.push("TRFDEUT");


var activation = 17832465;
var schedule = 14950458;

var dateStart = "2023-02-14";
var dateEnd = "2023-02-15";


for(let i = 0; i < TIPLOCs.length; i++)
{
    fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${TIPLOCs[i]}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    if (data.length == 0)
    {
        console.log(`${TIPLOCs[i]} is empty`)
    }
    else
    {
        fs.writeFileSync(`./trains/trainsPassing${TIPLOCs[i]}.json`, JSON.stringify(data, null, 2), 'utf-8', {});
    }
    

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
//comment the above example out for a working demo, uncomment the following:


//for looping through the ./trains directory
let directory_name = "trains";
let filenames = fs.readdirSync(directory_name);


filenames.forEach((file) => {
    const jsonFile = require(`./trains/${file}`); 
    //console.log(jsonFile);
    for(let i = 0; i < 1; i++)
    {
        //console.log(jsonFile.length)
        let obj = json[i];
        jsonFile.forEach(function(obj) { 
            console.log(obj.activationId + " " + obj.scheduleId);

             var schedule = obj.scheduleId;
             var activation = obj.activationId;

            fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                    console.log('in 1st fetch')
                    fs.writeFileSync(`./movements/movement${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
                    console.log('finished 1st fetch')
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

            fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                    console.log('in 2nd fetch')
                    fs.writeFileSync(`./schedules/schedule${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
                    console.log('done 2nd fetch')
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
         });
    }

 })
