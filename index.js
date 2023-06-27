const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

// เชื่อม Database 
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    return res.json({mgs:"Hello World"})
})
