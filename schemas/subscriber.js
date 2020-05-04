const mongoose = require('mongoose');

const {Schema} = mongoose;

const subscriberSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String
	},
	zipCode: {
		type: Number
	}
});

module.exports = mongoose.model('Subscriber', subscriberSchema);