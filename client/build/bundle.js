/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Helper = function() {

}

Helper.prototype = {

  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send();
  }

}

module.exports = Helper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var countryRequest = __webpack_require__(4)
var requestHelper = __webpack_require__(0)


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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function(){
  new UI();
}

window.addEventListener('load', app);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Country = function(options){

  this.name = options.name;

}

module.exports = Country;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var requestHelper = __webpack_require__(0)
var Country = __webpack_require__(3);

var CountryRequest = function() {
}


CountryRequest.prototype = {

  all: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/seeds", function(results){
      console.log(results);
      var countries = this.populateCountries(results);
      console.log(countries);
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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map