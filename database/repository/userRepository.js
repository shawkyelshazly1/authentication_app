const mongoose = require("mongoose");
const { UserModel } = require("../models");

class UserRepository {
	// add user To db
	async CreateUser(userData) {
		try {
			const newUser = await new UserModel(userData);
			return await newUser.save();
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user by id
	async FindUserById(userId) {
		try {
			const existingUser = await UserModel.findById(userId);
			return existingUser;
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	async FindUserByEmail(userEmail) {
		try {
			const existingUser = await UserModel.findOne({ email: userEmail }).select(
				"+password"
			);
			return existingUser;
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = UserRepository;
