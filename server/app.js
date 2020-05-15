// Import packages
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
// Import routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// Create app
const app = express();
// Config app
app.use(bodyParser.json());
app.use(helmet());
// Static serving
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
// CORS Config
app.use((req, res, next) => {
	// Set domains
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Set the methods
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	//
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/shop', shopRoutes);
app.use('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});
// Error handling route
app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
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
