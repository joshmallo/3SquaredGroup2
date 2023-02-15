/* fetch("./test.JSON")
.then(res => res.json())
.then(data => console.log(data)); */

const jsonFile = require("./tiplocs.json");
console.log(jsonFile);

/* const fs = require("fs");
const { parse } = require("csv-parse");
fs.createReadStream("./example.csv")
.pipe (parse({delimiter: ",", from_line:2}))
.on ("data", function(row) {
    console.log(row);
})
.on("error",function(error) {
    console.log(error.message);
})
.on("end", function () {
    console.log("finished");
}); */