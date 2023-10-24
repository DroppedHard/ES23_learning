const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const admin_login = 'admin'
const admin_password = crypto.createHash('sha256').update('admin').digest('hex');
const token_secret = crypto.randomBytes(32).toString('hex');

// generating token using JWT

function generateAccessToken(username) {
    return jwt.sign({username}, token_secret, {expiresIn:'10h'})
}

function verifyToken(req, res, next) {
    const token = req.cookies.jwtToken;

    if (!token) {
        return res.status(401).json({ message: 'Authorization failed - no API key provided!' })
    }

    try {
        const decoded = jwt.verify(token, token_secret);
        req.username = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Authentication failed. Invalid token' })
    }
}

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://localhost:5173',
    ],
    credentials: true,
    exposedHeaders: ['set-cookie'] // po sesję!
}))

app.get('/',verifyToken,  (req, res, next) => {
    res.send('Hello World!');
})

app.post('/login', (req, res, next) => {
    // console.log(req.body)
    const username = req.body.username;
    const password_hash = crypto.createHash('sha256').update(req.body.password).digest('hex');

    if (username === admin_login && password_hash === admin_password) {
        res.status(200).setHeader("Set-Cookie", `jwtToken=${generateAccessToken(username)}; HttpOnly;  Path=/; Max-Age=3600`).json({ message: 'Logged in'});
    } else {
        res.json({ message: 'Wrong credentials.' })
    }
})

// app.get('/chech-auth', (req, res, next) => {

// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))