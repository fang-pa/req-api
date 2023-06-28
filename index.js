const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const allowMethods = require('allow-methods');
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

// เชื่อม Database 
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true, useUnifiedTopology: true })
app.listen(port, "0.0.0.0")

// imports from Router
const homeRoute = require('./routers/home');
const userRoute = require('./routers/user');
const dataRoute = require('./routers/data');
const formReqRoute = require('./routers/formReq');

// routes from routers
app.use('', homeRoute)          .all(allowMethods(['get', 'head', 'post','put','delete']))
app.use('/user', userRoute)     .all(allowMethods(['get', 'head', 'post','put','delete']))
app.use('/data', dataRoute)     .all(allowMethods(['get', 'head', 'post','put','delete']))
app.use('/form', formReqRoute)  .all(allowMethods(['get', 'head', 'post','put','delete']))