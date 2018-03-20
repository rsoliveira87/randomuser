'use strict';

// pacote responsável por fazer a requisição na API
const clients = require('restify-clients');

const client = clients.createStringClient({
	url: 'https://randomuser.me/',
	rejectUnauthorized: false
});

class RandomUserService {

	constructor() {}

	getUsers() {
		let promise = new Promise(
			function (resolve, reject) {
				// faz a requisição na API
				client.get('/api/', function(err, req, res, obj){
					obj = JSON.parse(obj);

					try {
						resolve(obj);
					} catch (err) {
						reject(err);
					}
				});
			}
		);

		return promise;
	}

}

module.exports = RandomUserService;