const express = require('express');
const app = express();
const port = 3000;
const knex = require('knex');
const database = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'mpingleton',
		password: 'postgres',
		database: 'gmdb'
	}
});


app.get('/', (req, res) => {
	database.select('*').from('movies')
		.then(data => res.status(200).json(data));
});

app.get('/movies/:movieId', (req, res) => {
	database.select('*').from('movies').where({title: req.params.movieId})
		.then(data => res.status(200).json(data));
});

app.listen(port, () => {
	console.log('App listening on port' + port);
});