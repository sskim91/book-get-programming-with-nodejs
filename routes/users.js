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

router.get('/new', (req, res, next) => {
	res.render('users/new');
});

router.post('/create', (req, res, next) => {
	console.log(req.body);
	const userParams = {
		name: {
			first: req.body.first,
			last: req.body.last
		},
		email: req.body.email,
		password: req.body.password,
		zipCode: req.body.zipCode
	};

	User.create(userParams)
	.then(user => {
		res.render('/');
	}).catch(error => {
		console.error('Error saving user: ' + error.message);
	});
});

module.exports = router;
