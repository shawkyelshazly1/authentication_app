const { UserRepository } = require("../database");
const { hashPassword, generateAccessToken } = require("../utils");
const bcryptjs = require("bcryptjs");

class UserService {
	constructor() {
		this.repository = new UserRepository();
	}

	//register User
	async registerUser({ email, password, confirmPassword }) {
		try {
			// check password confirmation
			if (password !== confirmPassword) {
				return { error: "Password & Confirm Password not matching." };
			}

			let existingUser = await this.repository.FindUserByEmail(email);

			if (existingUser) return { error: "User Registered Already." };

			let newUser = await this.repository.CreateUser({
				email,
				password: await hashPassword(password),
			});

			return { newUser };
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// login User
	async loginUser({ email, password }) {
		try {
			let existingUser = await this.repository.FindUserByEmail(email);

			if (!existingUser) return { error: "Email not registered!" };

			if (!(await bcryptjs.compare(password, existingUser.password))) {
				return { error: "Wrong password!" };
			}

			let user = await this.repository.FindUserById(existingUser._id);
			let token = await generateAccessToken(user);

			return { user, token };
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load User
	async loadUser(userId) {
		try {
			let existingUser = await this.repository.FindUserById(userId);
			if (!existingUser) return { error: "Ca't find user." };

			return { ...existingUser._doc };
		} catch (error) {
			console.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = UserService;
