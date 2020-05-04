const mongoose = require('mongoose');

const {Schema} = mongoose;

const subscriberSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true
	},
	zipCode: {
		type: Number,
		min: [10000, "Zip code too short"],
		max: 99999  //10000~99999 까지
	},
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
	/**
	 * Mongoose의 validator 추가
	 * 유효성 평가자는 모델 속성에 적용되며 유효성 검증에 실패하면 데이터베이스 저장 등을 하지 못하게 한다.
	 */
});

subscriberSchema.methods.getInfo = function() {
  return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
  return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};

module.exports = mongoose.model('Subscriber', subscriberSchema);