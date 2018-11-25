const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Live!');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
