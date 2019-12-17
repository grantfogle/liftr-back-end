const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser());
app.use(cors());

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
});
app.get('/', (req, res) => {
    return res.send('The route worked!!!');
});