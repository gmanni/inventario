var mongoose = require('mongoose');
var pc = mongoose.model('Computer');

module.exports.computersCreate = function(req, res) {
  pc.create({
    marca: req.body.marca,
    modello: req.body.modello,
    tipologia: req.body.tipologia,
    serviceTag: req.body.serviceTag,
    idCopernico: req.body.idCopernico
  }, function(err, computer) {
      if (err) {
        sendJsonResponse(res, 400, err);
      }else{
        sendJsonResponse(res, 201, computer);
      }
    });
};

module.exports.computersList = function(req, res){
  pc
    .find()
    .exec(function(err, computer){
      if(!computer){
        console.log("404 - Users not found");
        sendJsonResponse(res, 404, {"message": "userid not found"});
        return;
      }else if (err){
        // si è verificato un errore e lo restituisco
        console.log("404 - " + err);
        sendJsonResponse(res, 404, err);
        return;
      }
      // restituisco il risultato del find
      console.log("200 - " + computer);
      sendJsonResponse(res, 200, computer);
    });
};

module.exports.computerDeleteOne = function(req, res) {
  var computerId = req.params.computerid;
  console.log("COMPUTERID" + computerId);
  if (computerId) {
    pc
      .findByIdAndRemove(computerId)
      .exec(
        function(err, user) {
          if (err) {
            console.log(err);
            sendJsonResponse(res, 404, err);
            return;
          }
          console.log("coputer id " + computerId + " deleted");
          sendJsonResponse(res, 204, null);
        }
    );
  } else {
    sendJsonResponse(res, 404, {
      "message": "No compuertId"
    });
  }
};

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};