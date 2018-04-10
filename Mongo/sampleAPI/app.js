//Import everything
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//Express setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Mongoose setup
mongoose.connect('mongodb://localhost/basic_mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema({
    name: {type: String},
});

mongoose.model('Person', PersonSchema);
var Person = mongoose.model('Person');

//Routes
app.get('/', function(req, res) {
    Person.find(function(err,people) {
        if(err) {
            console.log(err);
        } else {
            res.json(people);
        }
    });
});

app.get('/new/:name/', function(req,res) {
    person = new Person({name: req.params.name});
    person.save(function(err){
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

app.get('/remove/:name/', function(req,res) {
    Person.findOneAndRemove({name:req.params.name}, function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
});

app.get('/:name', function(req,res) {
    Person.findOne({name:req.params.name}, function(err, person) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.json(person);
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});