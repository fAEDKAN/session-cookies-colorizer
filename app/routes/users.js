var express = require('express');
var router = express.Router();

const { msg, logout } = require ('../controllers/usersController')


//* /users

router
    .get('/message', msg)
    .get('/logout', logout)

module.exports = router;
