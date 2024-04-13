var express = require('express')
var csrf = require('csurf')

var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
var csrf_ = express()

csrf_.use(cookieParser())

csrf_.get('/api/csrf', csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    // res.render('send', { csrfToken: req.csrfToken() })
    res.send({ csrfToken: req.csrfToken() })
})


module.exports = csrf_;