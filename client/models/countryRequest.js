var RequestHelper = require('../helper/requestHelper.js')
var Country = require('./country.js');

var CountryRequest = function() {
  this.requestHelper = new RequestHelper();
}


CountryRequest.prototype = {

  all: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/seeds", function(results){
      var countries = this.populateCountries(results);
      callback(countries);
    }.bind(this));

  },

  populateCountries: function(results){
    var countries = results.map(function(resultObject){
      return new Country(resultObject);
    })
    return countries
  }

}

module.exports = CountryRequest;

