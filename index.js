const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('<h2>Hello There</h2>');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
