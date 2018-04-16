//Import packages for (M & N)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//import router.js
const route = require('./routes');

//Initialize express app
var app = express();

const PORT = 8000;

mongoose.connect('mongodb://localhost:27017/todolist');

mongoose.connection.on('connected',()=>{
    console.log("Mongodb connected.")
})

app.use(cors());

app.use(bodyParser.json());

//Root route
app.use('/', route);

//Start server
app.listen(PORT, () => {
    console.log("Server started on Port 8000");
});