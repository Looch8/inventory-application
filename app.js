const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(process.env.PORT || 4001, () => {
	console.log(
		`My first Express app - listening on port ${process.env.PORT}!`
	);
});

// *** GAME MANAGEMENT APP ***

// Database tables and fields I may need

// Users
// - id
// - username
// - password
// - email

// Games
// - id
// - title
// - description
// - genre
// - platform
// - developer

// Genres
// - id
// - name
