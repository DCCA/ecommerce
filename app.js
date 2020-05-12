// Import packages
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

// Create app
const app = express();

// Config app
app.use(bodyParser.json());

// Static serving
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Routes
app.use('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Start server
app.listen(process.env.PORT || 3000);
