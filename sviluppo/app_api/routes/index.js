var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

// utenti
router.get('/users', ctrlUsers.usersList);
router.post('/users', ctrlUsers.usersCreate);
router.delete('/user/:userid', ctrlUsers.usersDeleteOne);


router.get('/user/:userid', ctrlUsers.usersReadOne);
// router.put('/users/:userid', ctrlUsers.locationsUpdateOne);
// router.delete('/users/:userid', ctrlUsers.locationsDeleteOne);

module.exports = router;
