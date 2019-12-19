const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');

app.use(bodyParser());
app.use(cors());

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
});
app.get('/', (req, res) => {
    queries.listAll().then(students => {
        res.send(students);
    });
});