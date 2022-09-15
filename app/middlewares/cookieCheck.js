module.exports = (req, res, next) => {
    req.session.bgColor = req.cookies.bgColor
    
    next()
};