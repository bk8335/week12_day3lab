var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function(){
  this.url = 'mongodb://localhost:27017/countryList'
}

CountryQuery.prototype = {

  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('countries');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  },

  addCountry:function(){
    
    var input = document.getElementById('button');
    input.addEventListener("click", function(){

      var countryToAdd = document.getElementById("country-dropdown")
      var collection = db.collection('countries');
      collection.insert(countryToAdd.value)
    })
    

  }

}

module.exports = CountryQuery;