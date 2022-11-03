const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mainPageRouter = require('./router/main.router')

const { connectSQl } = require('./db')
// connectSQl();
app.use( bodyParser.urlencoded({ extended: true }))
app.use(express.static('view'))


app.listen(4001,'0.0.0.0', () => console.log('Example app listening on port 4001!'));

app.use('/', mainPageRouter);