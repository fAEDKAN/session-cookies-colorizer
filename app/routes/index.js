var express = require('express');
var router = express.Router();

const { index, registerControl, destroy} = require ('../controllers/indexController')
const formValidator = require ('../validations/formValidator')

//* /

router
    .get('/', index)
    .post('/formValidator',formValidator, registerControl)
    .get('/delete',destroy)

module.exports = router;
