module.exports.index = function(application, req, res) {
	const randomUserService = require('../services/randomuser');
	let users = new randomUserService();
	links.getUsers().then(function(obj){
		res.render("index");
	}).catch(function(error){
		console.log(error);
	});
}