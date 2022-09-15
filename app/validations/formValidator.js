const { check } = require('express-validator');

module.exports = [

    check('userName')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min : 5,
            max : 20
        }).withMessage('Debe contener entre 5 y 20 caracteres').bail()
        .isAlpha('es-ES').withMessage('Sólo caracteres alfabéticos'),
    
    check('color')
        .notEmpty().withMessage('Tenés que elegir un color').bail(),
    
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email debe ser válido'),

    check('age')
        .notEmpty().withMessage('Tenés que ingresar tu edad').bail()
        .isInt({
            min : 18,
            max : 100
        }).withMessage('Tenés que ser mayor de 18 años')
]