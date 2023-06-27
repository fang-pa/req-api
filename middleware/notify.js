const axios = require("axios");
const queryString = require('query-string');
require('dotenv').config();

const notify = async (msg,token) =>{
    await axios.post(process.env.LINE_NOTIFY,queryString.stringify({message:msg}),
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    },
)
}

module.exports = {notify:notify};