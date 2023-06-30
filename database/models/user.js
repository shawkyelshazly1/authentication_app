const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		email: { type: String, required: true, trim: true },
		password: { type: String, required: true, trim: true, select: false },
		name: { type: String, trim: true },
		bio: { type: String, trim: true },
		phone: { type: String, trim: true },
		photo: {
			type: String,
			trim: true,
			default: "https://i.imgur.com/kzlPIu6.png",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
