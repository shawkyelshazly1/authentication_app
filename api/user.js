const database = require("../database");
const { UserService } = require("../services");
const userAuth = require("./middlewares/auth");

module.exports = (app) => {
	//init service instance
	const userService = new UserService();

	// register Route
	app.post("/users/register", async (req, res, next) => {
		const { email, password, confirmPassword } = req.body;
		if (!(email && password && confirmPassword))
			return res.status(409).json({ error: "User information required." });

		let user = await userService.registerUser({
			email,
			password,
			confirmPassword,
		});

		if (user.error) {
			return res.status(409).json({ error: user.error });
		}

		return res.status(200).json({ message: "User created!" });
	});

	// login Route
	app.post("/users/login", async (req, res, next) => {
		const { email, password } = req.body;
		if (!(email && password))
			return res.status(409).json({ error: "User information required." });

		let user = await userService.loginUser({ email, password });

		if (user.error) {
			return res.status(409).json({ error: user.error });
		}

		return res.status(200).json({ ...user });
	});

	// get user Route
	app.get("/users", userAuth, async (req, res, next) => {
		const { _id } = req.user;
		let user = await userService.loadUser(_id);

		if (user.error) {
			return res.status(409).json({ error: user.error });
		}

		return res.status(200).json({ ...user });
	});
};
