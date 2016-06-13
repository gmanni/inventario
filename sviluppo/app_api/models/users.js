var mongoose = require( 'mongoose' );

var userSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  cognome: {type: String, required: true},
  email: {type: String, required: true}
});

//mongoose.model(model, schema, mongoDB collection name);
mongoose.model('User', userSchema, 'Users');
