var countryRequest = require('../models/countryRequest.js')
var apiRequest = require('../models/apiRequest.js')
var requestHelper = require('../helper/requestHelper.js')


var UI = function() {
  var countries = new countryRequest();
  var apiCountries = new apiRequest();
  countries.all(function(countries){
    this.render(countries);
  }.bind(this))
  apiCountries.all(function(apiCountries){
    this.renderDropdown(apiCountries);
  }.bind(this))
}


UI.prototype = {

  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(countries) {
    var container = document.getElementById('countries');
    container.innerHTML='';
    for(var country of countries){
      console.log(country)
      var li = document.createElement('li');
      this.appendText(li, country.name, 'Country name: ');
      container.appendChild(li)
    }
  },

  renderDropdown: function(apiCountries){
    var container = document.getElementById('country-dropdown');
    container.innerHTML='';
    for(var country of apiCountries){
      console.log('api has been hit')
      var option = document.createElement('option');
      this.appendText(option, country.name, '');
      container.appendChild(option)
    }
  }

}


module.exports = UI;