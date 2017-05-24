use countryList;

db.dropDatabase();

db.countries.insert({name:"Australia"})
db.countries.insert({name:"Indonesia"})

db.countries.find();