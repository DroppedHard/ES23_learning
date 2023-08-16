const express = require('express');
const router = express.Router();
const usersHelpers = require('../services/usersHelpers');

router.get('/', function(req, res, next) {
    res.send("Users router")
});

router.post('/register', (req, res, next) => {
    console.log("Registering new user")
    // console.log(req.body)
    message = usersHelpers.register(req.body)
    res.send(message)
})

module.exports = router