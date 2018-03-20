module.exports.index = function(application, req, res) {
	const randomUserService = require('../services/randomuser');
	let users = new randomUserService();
	users.getUsers().then(function(obj){
		res.render("index");
	}).catch(function(error){
		console.log(error);
	});
}