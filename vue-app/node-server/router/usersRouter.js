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
    console.log(req.session.data)
    const out = usersHelpers.login(req.body);
    if (out.code == 0) {
        req.session.data = {
            user: req.body.username,
            sessionCounter: out.sessionCounter,
        };
    }
    console.log(req.session.data)
    res.send(out)
})

router.get('/logout', (req, res) => {
    console.log("Logging out")
    req.session.destroy();
    usersHelpers.logout();
    res.send(usersHelpers.logout(req.body));
})

router.get('/userdata', (req, res) => {
    console.log("Fetching user data")
    console.log(req.session.data)
    if (req.session.data) {
        res.json({
            user:req.session.data.user,
            sessionCounter: req.session.data.sessionCounter,
            code: 0,
        });
    } else {
        // res.status(401).json({body: 'User not logged in'}) // - fajny sposób na kody http!!!
        res.json({body: 'User not logged in', code: 1})
    }
})

router.get('/set-session', (req, res) => {
    req.session.message = 'Hello from session!';
    res.send('Session data set');
});

router.get('/get-session', (req, res) => {
    const message = req.session.message || 'No session data';
    res.send(message);
});


// router.get(/\/a[0-9]\/c{2,3}/, (req, res) => {
//     res.send("<h1>Route Second</h1");
// })

// router.get('/user/:name([a-zA-Z]+)/:contact([6-9][0-9]{9})', (req, res) => {
//     const name = req.params.name;
//     const contact = req.params.contact;
//     res.send({
//         "username": name,
//         "contact": contact
//     })
// })

module.exports = router