var mongoose = require( 'mongoose' );

var computerSchema = new mongoose.Schema({
  marca: {type: String, required: true},
  modello: {type: String, required: true},
  tipologia: {type: String, required: true},
  serviceTag: {type: String},
  idCopernico: {type: String}

 /* marca
		mac address wifi
		mac address wired
		CPU
		VGA
		RAM
		HDD
		OS installato 
		data installazione
		data acquisto
		host name
		programmi installati/da installare
		immagine(si no)
		location immagine
		note immagine
		cartella PUBLIC*/
});

//mongoose.model(model, schema, mongoDB collection name);
mongoose.model('Computer', computerSchema, 'Computers');
