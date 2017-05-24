var express = require('express');
var app = express();
var countryRouter = express.Router();

var CountryQuery = require('../db/countryQuery');

var query = new CountryQuery();

countryRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

module.exports = countryRouter;