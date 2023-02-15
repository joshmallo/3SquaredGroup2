const express = require ('express');
const app = express(); //initialise the server
const path = require('path');
const port = 12345;
//static asset directories
app.use(express.static(__dirname + '/..' + '/frontend' + '/public'))
app.use(express.static(__dirname + '/..' + '/frontend' + '/webpage'))

app.get('/', (req, res) => 
{
  res.sendFile(path.join(__dirname, '..', 'frontend', 'webpage', 'index.html'));
})

app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})