require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Enabling cors requests
app.use(cors());

app.use(helmet());
app.use(compression());

app.use(
  cookieSession({
    name: 'session',
    keys: ['secretKeyToUse'],
  })
);

// The Api App
// Call the main api route here
app.use('/api', require('./controllers/index.js'));

// React App
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
