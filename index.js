const express = require('express');

require('./utils/db')

const Contact = require('./model/contact')

const app = express();

const port = 3000;


app.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts)
})

app.listen(port, () => {
    console.log('listening on http://localhost:'+port)
})