var RequestHelper = require('../helper/requestHelper.js')
var Country = require('./country.js');

var ApiRequest = function() {
  this.requestHelper = new RequestHelper();
}


ApiRequest.prototype = {

  all: function(callback){
    this.requestHelper.makeRequest("https://restcountries.eu/rest/v2", function(results){
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

module.exports = ApiRequest;