var countryRequest = require('../models/countryRequest.js')
var requestHelper = require('../helper/requestHelper.js')


var UI = function() {
  console.log("UI has been hit")
  var countries = new countryRequest();
  countries.all(function(countries){
    this.render(countries);
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
  }

}


module.exports = UI;