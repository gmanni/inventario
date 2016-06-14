var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');
var ctrlComputers = require('../controllers/computers');

// utenti
router.get('/users', ctrlUsers.usersList);
router.post('/users', ctrlUsers.usersCreate);
router.put('/user/:userid', ctrlUsers.usersFindOneAndUpdate);
router.delete('/user/:userid', ctrlUsers.usersDeleteOne);
router.get('/user/:userid', ctrlUsers.usersReadOne);

// pc
router.get('/computers', ctrlComputers.computersList);
router.post('/computers', ctrlComputers.computersCreate);
router.delete('/computer/:computerid', ctrlComputers.computerDeleteOne);



module.exports = router;
