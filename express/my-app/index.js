const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

url = "mongodb+srv://M001-student-2:hello_qwerty@sandbox.ueiou.mongodb.net/video?retryWrites=true&w=majority";

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(
	() => console.log("Successfully Connections!")
).catch(
	(err) => console.log(err)
);

const db = mongoose.connection;

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post("/filter", async (req, res) => {

	console.log(req.body);
	console.log(req.params);

	const name = req.body.lol;
	console.log(name);

	const mySchema = new mongoose.Schema({});

	const myModel = mongoose.model("myModel", mySchema, "movieDetails");

	try {
		const allData = await myModel.find({
			title: {$regex: name}
		});

		res.json(allData);
	} catch (error) {
		console.error(error);
	}

});

app.listen(3000, () => { console.log("Server is Running!")});
