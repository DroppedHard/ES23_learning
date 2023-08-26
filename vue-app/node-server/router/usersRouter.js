const express = require('express');
const router = express.Router();
const usersHelpers = require('../services/usersHelpers');

router.get('/', function (req, res, next) {
    res.send("Users router")
});

router.post('/register', (req, res, next) => {
    console.log("Registering new user")
    // console.log(req.body)
    res.send(usersHelpers.register(req.body))
})

router.post('/login', (req, res, next) => {
    console.log("Logging to an account")
    res.send(usersHelpers.login(req.body))
})

module.exports = router