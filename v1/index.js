//Start server and send data

import express from 'express';
import data from './locationID.json' assert { type: "json" };;

const app = express();

app.get('/', (req, res) => {
  res.send("Trains");
});

app.get('/api', (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
    console.log('On');
  });



