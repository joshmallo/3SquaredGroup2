import express from 'express';
import data from './locationID.json' assert { type: "json" };;

const app = express();

app.get('/', (req, res) => {
  res.send("Trains");
});

//Origin, Destination, sID, aID to server/data

app.get('/api', (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
    console.log('On');
  });



