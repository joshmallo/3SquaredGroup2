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


/*var TIPLOCs = ["CREWEMD", "AACHEN","ABHLJN", "ABHL811", "ABHLTB", "ABWD", "ABWDARJ", "ABWDXR", "ABWDXRS", "ABWDER","ABTSWDJ","ABTS654","ABER","ABARASQ","ABRBEG","ABCWM", "ABCWMPI"];
TIPLOCs.push("ABCWMPO");
TIPLOCs.push("STAFFRD");
TIPLOCs.push("TRFDEUT");
const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');

var activation = 17832465;
var schedule = 14950458;

var dateStart = "2023-02-12";
var dateEnd = "2023-02-13";


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
}*/
let directory_name = "trains";
let filenames = fs.readdirSync(directory_name);

var schedule;
var activation;

 filenames.forEach((file) => {
    const jsonFile = require(`./trains/${file}`);
    //console.log(jsonFile);
    for(let i = 0; i < 1; i++)
    {
        //console.log(jsonFile.length)
        let obj = json[i];
        jsonFile.forEach(function(obj) { 
            console.log(obj.activationId + " " + obj.scheduleId);

             schedule = obj.scheduleId;
             activation = obj.activationId;

             console.log("here");
            fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                    
                    fs.writeFileSync(`./movements/movement${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
                    console.log("here 2");
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

            fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                    console.log("here 3");
                    fs.writeFileSync(`./schedules/schedule${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
         });
    }

 })



//let directory_name = "trains";
//let filenames = fs.readdirSync(directory_name);

// filenames.forEach((file) => {
//     const jsonFile = require(`./trains/${file}`);
//     for (var key in jsonFile)
//  {
//     var item = json(key);
//     console.log(key);
//  }

// })

// Function to get current filenames
// in directory
/*console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    console.log("File:", file);
});*/













/*fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`movement${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/schedule/${activation}/${schedule}`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`schedule${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${tiploc}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
  .then(res => res.json())
  .then(data => {
    //What do we want done with the data?
    fs.writeFileSync(`trainsPassing${tiploc}.json`, JSON.stringify(data, null, 2), 'utf-8');

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/









