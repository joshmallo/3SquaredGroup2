const express = require('express');
const app = express();

const port = 9050;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});
