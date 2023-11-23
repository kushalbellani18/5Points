const express = require("express")
const mongoose = require("mongoose")

const app = express()
url = "mongodb+srv://M001-student-2:hello_qwerty@sandbox.ueiou.mongodb.net/video?retryWrites=true&w=majority"
mongoose.connect(url,{
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(
	() => console.log("Successfully Connections!")
).catch(
	(err) => console.log(err)
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection bind: "));
db.once('open', async () =>  {
//	const adminDb = db.client.db('admin');
//	const listDatabases = await adminDb.admin().listDatabases();

	const mySchema = new mongoose.Schema({
		item: String,
		year: Number
	});

	const myModel = mongoose.model("myModel", mySchema, "movieScratch");

	try {
		const allData = await myModel.find();

		console.log(allData);
	} catch (error) {
		console.error(error);
	}

});

app.listen(3000, () => {
	console.log("Server is Running")
});
