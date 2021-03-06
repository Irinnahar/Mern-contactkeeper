const express = require('express');
const app = express();
const connectDb = require('./config/db');

connectDb();
app.get('/', function (req, res) {
    res.json({ msg: 'Welcome to Contactkeeper API.' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});