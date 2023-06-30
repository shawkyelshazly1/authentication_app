const { validateAccessToken } = require("../../utils");


module.exports = async (req, res, next) => {
	try {
		let isAuthenticated = await validateAccessToken(req);
		if (isAuthenticated) {
			return next();
		}
		return res.status(403).json({ error: "Not Authorized!" });
	} catch (error) {
		return res.status(403).json({ error: "Not Authorized!" });
	}
};
