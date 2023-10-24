const express = require('express');
const expressSession = require("express-session")
// const https = require("https")
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const productsRouter = require('./router/productsRouter');
const usersRouter = require('./router/usersRouter');
const compression = require("compression")

const app = express();
var corsOptions = {
    origin: [
        "http://localhost:8080",
        "https://localhost:8080",
    ],
    credentials: true,
    exposedHeaders: ['set-cookie'],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())
app.use(expressSession({
    secret: 'super secret key',
    cookie: {
        maxAge: 600000,
        secure: false,
    },
    saveUninitialized: true,
    resave: false,
    unset: 'destroy',
}));

app.disable('x-powered-by')

app.use('/products', productsRouter);
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
});

//Run app, then load http://localhost:port in a browser to see the output.