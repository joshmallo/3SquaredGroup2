const { json, response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const { getActiveTiplocs } = require('./getData/displayWorkingTiplocData');

const port = 9050;

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');


var dateStart = "2023-02-14";
var dateEnd = "2023-02-15";

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

var TIPLOCs = ["CREWEMD", "AACHEN","ABHLJN", "ABHL811", "ABHLTB", "ABWD", "ABWDARJ", "ABWDXR", "ABWDXRS", "ABWDER","ABTSWDJ","ABTS654","ABER","ABARASQ","ABRBEG","ABCWM", "ABCWMPI"];
TIPLOCs.push("ABCWMPO");
TIPLOCs.push("STAFFRD");
TIPLOCs.push("TRFDEUT");

for(var key in TIPLOCs)
{
    getActiveTiplocs(TIPLOCs[key], dateStart, dateEnd, headers);
}


var list = ["ABCWMPO", "STAFFRD", "TRFDEUT", "CREWEMD"];

for(var key in TIPLOCs)
{
    getActiveTiplocs(TIPLOCs[key], dateStart, dateEnd, headers);
}


