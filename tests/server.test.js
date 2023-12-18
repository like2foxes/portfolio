import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert';

import request from 'supertest';

import { server } from '../src/server.js'

describe('router', () => {

	afterEach(() => {
		console.log('cleaning up...')
		server.unref();
	});

	describe('GET /', () => {
		it('should return 200 OK', async () => {
			const response = await request(server).get('/');
			assert(response.status === 200);
		});

		it('should return html', async () => {
			const response = await request(server).get('/');
			assert(response.type === 'text/html');
		});

		it('should have a title of "Home"', async () => {
			const response = await request(server).get('/');
			assert(response.text.includes('<title>Home</title>'));
		});
	});

	describe('GET /about', () => {
		it('should return 200 OK', async () => {
			const response = await request(server).get('/about');
			assert(response.status === 200);
		});

		it('should return html', async () => {
			const response = await request(server).get('/about');
			assert(response.type === 'text/html');
		});

		it('should have a title of "About"', async () => {
			const response = await request(server).get('/about');
			assert(response.text.includes('<title>About</title>'));
		});
	});
});
