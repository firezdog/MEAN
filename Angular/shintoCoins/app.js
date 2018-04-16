//Import everything
var express = require('express');
var app = express();

//Angular setup
app.use(express.static( __dirname + '/shintoApp/dist' ));

app.all("*", (req,res,next) => {
    res.sendFile("index.html", { root: './shintoApp/dist' })
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});