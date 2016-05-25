var mongoose = require('mongoose');
var Utenti = mongoose.model('User');

module.exports.usersCreate = function(req, res) {
  Utenti.create({
    nome: req.body.nome,
    cognome: req.body.cognome,
  }, function(err, user) {
      if (err) {
        sendJsonResponse(res, 400, err);
      }else{
        sendJsonResponse(res, 201, user);
      }
    });
};

module.exports.usersList = function(req, res){
  Utenti
    .find()
    .exec(function(err, user){
      if(!user){
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
      console.log("200 - " + user);
      sendJsonResponse(res, 200, user);
    });
};

module.exports.usersReadOne = function(req, res){
  console.log("STO CERCANDO " + req.params.userid);
  if(req.params && req.params.userid){
    // esiste lo userid  nella richiesta
    //Loc
    Utenti
      .findById(req.params.userid)
        .exec(function(err, user) {
          console.log(req.params.userid);
          if(!user){
            // la userid non è stata trovata
            console.log("404 - userid not found");
            sendJsonResponse(res, 404, {"message": "userid not found"});
            return;
          }else if (err){
            // si è verificato un errore e lo restituisco
            console.log("404 - " + err);
            sendJsonResponse(res, 404, err);
            return;
          }
          // restituisco il risultato del findById
          console.log("200 - " + user);
          sendJsonResponse(res, 200, user);
        });
  }else{
    // non esiste la locationid nella richiesta e lo restituisco
    console.log("404 - No userid in request");
    sendJsonResponse(res, 404, {"message": "No userid in request"});
  }
};

module.exports.usersDeleteOne = function(req, res) {
  var userid = req.params.userid;
  if (userid) {
    Utenti
      .findByIdAndRemove(userid)
      .exec(
        function(err, user) {
          if (err) {
            console.log(err);
            sendJsonResponse(res, 404, err);
            return;
          }
          console.log("user id " + userid + " deleted");
          sendJsonResponse(res, 204, null);
        }
    );
  } else {
    sendJsonResponse(res, 404, {
      "message": "No userid"
    });
  }
};

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
