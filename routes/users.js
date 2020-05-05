const express = require('express');
const router = express.Router();

const User = require('../schemas/user');

router.get('/', (req, res, next) => {
	User.find({})
	.then(users => {
		res.render("users/index", {
			users: users
		});
	})
	.catch(error => {
		console.error(`Error:  ${error.message}`);
		res.redirect('/');
	});
});

module.exports = router;
