const colors = require('../data/colorsDB')

const { validationResult } = require('express-validator')



module.exports = {

    index : (req, res) => {
        return res.render('index', {
            colors})
    },

    registerControl : (req, res) => {
        const errors = validationResult(req);
        const { userName, color, email, age, remember } = req.body;

        if(errors.isEmpty()) {
            req.session.bgColor = {
                userName,
                color,
                email,
                age,
                remember
            }

            res.cookie('bgColor', req.session.bgColor, {
                maxAge : 150 * 60
            })
            if(remember){
                res.cookie('bgColor', req.session.bgColor, {
                    maxAge : 1000 * 60
                })
            }
            
            res.redirect('users/message')
        } else {
            return res.render ('index', {
                colors,
                errors : errors.mapped(),
                old : req.body
            })
        }
    },

    destroy : (req, res) => {
        req.session.destroy(),
        res.cookie('bgColor', null, {
            maxAge : -1
        })
        res.redirect('/')
    }
}