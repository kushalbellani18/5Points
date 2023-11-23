const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
const port = 8080;

const db = new sqlite3.Database("basic.db");

app.get("/data", (req, res) => {
	db.all("select * from person", (err, rows) => {
		if (err) {
			console.error(err);
			res.status(500).json({error: "Internal Server Error"});
		} else {
			res.json(rows);
		}
	});
});

app.listen(port, () => {
	console.log("Server running");
});
