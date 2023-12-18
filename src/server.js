'use strict';

import http from 'http';
import fs from 'fs';

const server = http.createServer(router);

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});

export { server };

/**
	* @param {http.IncomingMessage} req - An http request object
	* @param {http.ServerResponse} res - An http response object
	*/
function router(req, res) {
	if (!req.url || !req.method) {
		res.statusCode = 500;
		res.end('E_SERVER_ERROR');
		return;
	}
	if (req.method === 'GET') {
		if (req.url === '/') {
			fs.readFile('./src/routes/index.html', (err, data) => {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.end('E_SERVER_ERROR');
				}
				else {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/html');
					res.end(data);
				}
			})
			return;
		}
		if(req.url === '/about') {
			fs.readFile('./src/routes/about/index.html', (err, data) => {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.end('E_SERVER_ERROR');
				}
				else {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/html');
					res.end(data);
				}
			})
			return;
		}

		res.statusCode = 404;
		res.end('E_NOT_FOUND');
	}

}
