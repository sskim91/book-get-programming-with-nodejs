const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect(
	"mongodb://localhost:27017/admin",
	{
		dbName: 'confetti_cuisine',
		useNewUrlParser: true
	}
);

User.remove({})

User.create({
	name: {
		first: 'Jon',
		last: 'Wexler'
	},
	email: 'jon@jonwexler.com',
	password: 'pass123'
});
