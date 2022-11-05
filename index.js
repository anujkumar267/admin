const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mainPageRouter = require('./router/main.router')

const { connectSQl } = require('./db')
app.use(cors());
// connectSQl();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('view'))

app.use('/', mainPageRouter);

app.listen(4001, '0.0.0.0', () => console.log('Example app listening on port 4001!'));
