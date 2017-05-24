var countryRequest = require('../models/countryRequest.js')
var requestHelper = require('../helper/requestHelper.js')


var UI = function() {
  var countries = new countryRequest();
  countries.all(function(countries){
    this.render(countries);
  }.bind(this))
}


UI.prototype = {

  render: function(countries) {
    var container = document.getElementById('countries');
    container.innerHTML='';
    for(var country of countries){
      var li = document.createElement('li');
      this.appendText(li, country.name, 'Country name: ');
    }
    container.appendChild(li)
  }

}


module.exports = UI;