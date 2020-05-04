const mongoose = require('mongoose');
const {Schema} = mongoose;

const courseSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true,
	},
	items: [],
	zipCode: {
		type: Number,
		min: [10000, "Zip code too short"],
		max: 99999  //10000~99999 까지
	}
});

module.exports = mongoose.model('course', courseSchema);