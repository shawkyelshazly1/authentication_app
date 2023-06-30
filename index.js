const express = require("express"),
	cors = require("cors");
const { initDatabaseConnection } = require("./database");
const { UserAPI } = require("./api");

// init dotenv
require("dotenv").config();

// set express app instance
const app = express();

app.use(express.json());

// init middlewares
app.use(cors());

//init db connection
initDatabaseConnection();

// register API
UserAPI(app);

// start listening to server
app.listen(process.env.PORT || 5000, () => {
	console.log(`🚀 Server started on port ${process.env.PORT || 5000}`);
});
