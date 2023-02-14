const express = require('express');
const app = express();
const fs = require('fs');

const headers = new Headers();
headers.append('X-ApiKey', 'AA26F453-D34D-4EFC-9DC8-F63625B67F4A');
headers.append('X-ApiVersion', '1');


var tiploc = "CREWEMD";
var dateStart = "2023-02-12";
var dateEnd = "2023-02-13";

