const express = require('express');
const router = express.Router();

const Subscriber = require('../schemas/subscriber');

router.get('/', (req, res, next) => {
	Subscriber.find({})
	.then((subscribers) => {
		res.render('subscribers', {subscribers: subscribers});
	})
	.catch((err) => {
		console.log(err);
		next(err);
	});
});

router.post('/', async (req, res, next) => {
	try {
		const newSubscriber = await new Subscriber({
			name: req.body.name,
			email: req.body.email,
			zipCode: req.body.zipCode
		});
		newSubscriber.save();
		res.render('thanks');
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;