const express = require('express');
const mongoose = require('mongoose');

const app = express();

// TODO: This is throwing authentication error. Fix it
mongoose
	.connect(
		'mongodb://blexxy:love@mongo/?authSource=amdin&directConnection=true'
	)
	.then(() => console.log('Mongo Db connected Successfully'))
	.catch((e) => {
		console.log('___ ERROR CONNECTING TO MONGODB');
		console.log(e);
	});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('<h2>Hello There</h2>');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
