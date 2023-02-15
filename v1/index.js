import express from 'express';
import data from './locationID.json' assert { type: "json" };;

const app = express();

app.listen(3000, () => {
    console.log('On');
  });

  app.get('/', (req, res) => {
  //Origin, Destination, sID, aID to server
  res.send(data);
});

