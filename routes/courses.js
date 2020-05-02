const express = require('express');
const router = express.Router();

const courses = [{
	title: "Event Driven Cakes",
	cost: 50
}, {
	title: "Asynchronous Artichoke",
	cost: 25,
},{
	title: "Object Oriented Orange Juice",
	cost: 10
}]

router.get('/', (req, res) => {
	res.render('courses',{
		offeredCourses: courses
	});
});

module.exports = router;