const XLSX = require("xlsx");

// read file into memory
const workbook = XLSX.readFile("tiplocs.xlsx");
const worksheet = workbook.Sheets["Sheet1"];

const arrTiplocs = XLSX.utils.sheet_to_json(worksheet);

// outputs all tiplocs
for (const tiploc of arrTiplocs) {
    const temp = tiploc["TIPLOC"];
    console.log(temp);
}