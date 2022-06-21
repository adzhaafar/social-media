// helper functions that query database
const { createUser } = require("./apiFuncs");

require('dotenv').config();

const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_PASS;

// connect databases
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// start app
const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3002, () => {
    console.log(`Server Started at ${3002}`)
})

// routes
// creating user
app.post("/createUser", (req, res) => { 
    const body = req.body;
    res.send(body);
    createUser(body.email, body.fullName, body.username, body.password)
    
});