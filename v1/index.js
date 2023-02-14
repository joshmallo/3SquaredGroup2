import express from 'express';
import data from './trains.json' assert { type: "json" };;

const app = express();

app.listen(3000, () => {
    console.log('On');
  });

// for (let i = 0; i < data.length; i++) {
//   var activationId = data[i].activationId
//   var scheduleId = data[i].scheduleId
//   data[i] = {activationId, scheduleId};
// }

  app.get('/', (req, res) => {
  res.send(data);
});

