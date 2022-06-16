express = require("express");
bodyParser = require("body-parser");
createUser = require('./apiCalls.js');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// route for create user
app.post("/createUser", (req, res) => {
    // get data from request body
    const body = req.body;
    createUser(body.firstName, body.lastName, body.username).then((data) => res.json(data))
});

// start app
app.listen(3002, () => console.log("started"));

