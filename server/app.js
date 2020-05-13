// Import packages
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');

// Create app
const app = express();

// Config app
app.use(bodyParser.json());
app.use(helmet());

// Static serving
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Routes
app.use('/api/auth', authRoutes);
app.use('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Connect to DB
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@node-complete-bftj6.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then((result) => {
		console.log('DB Connected');
		// Start server
		app.listen(process.env.PORT || 3000);
		console.log('Server started');
	})
	.catch((err) => console.log(err));
