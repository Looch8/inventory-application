const express = require("express");
const app = express();
require("dotenv").config();

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const gameRoute = require("./routes/gameRoute");
app.use("/", gameRoute);

app.get("/", (req, res) => res.render("index"));

app.listen(process.env.PORT || 4001, () => {
	console.log(`listening on port ${process.env.PORT}!`);
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
