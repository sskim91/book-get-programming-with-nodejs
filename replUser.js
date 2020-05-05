const mongoose = require("mongoose");
const User = require("./schemas/user");

mongoose.connect(
	"mongodb://localhost:27017/recipe_db",
	{useNewUrlParser: true}
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
