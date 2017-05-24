var express = require('express');
var app = express();
var apiRouter = express.Router();

var CountryQuery = require('../db/countryQuery');

var query = new CountryQuery();

apiRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

module.exports = apiRouter;

