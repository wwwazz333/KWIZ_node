import express from 'express';
import { createServer } from 'http';
import api from './api/api';
import { connection } from './api/config/database';

const app = express();
app.use(express.json());
app.use('/api', api);

const server = createServer(app)
connection()
	.then(() => {
		server.listen('8080', () => {
			console.log('Listening on port 8080');
		});
	}
	).catch((error) => console.error('DB Error', error))