const express = require('express');

//Database
const db = require('./config/config');
//Test connexion DB
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))

const app = express();

// === Configuration Headers, CORS ===
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/geoloc/auth', require('./routes/auth'));
app.use('/api/geoloc/colis', require('./routes/colis'));
app.use('/api/geoloc/positions', require('./routes/positions'));
app.use('/api/geoloc/profiles', require('./routes/users'));

module.exports = app;