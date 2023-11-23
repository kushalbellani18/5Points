const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./serviceAccountKey.json");

admin.initializeApp({
	credential:admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/getData', async(req, res) => {
	const db = admin.firestore();
	const data = db.collection("video");

	res.send(data);

	data.get().then( (snapshot) => {
		const d = snapshot.docs.map( (doc) => ({
			id:doc.id,
			name: doc.data().name,
			year: doc.data().year
		}));

		console.log(d);
		res.send(d);
	} );
});

app.post('/addData', async (req, res) => {
	const db = admin.firestore();
	const data = db.collection("video");

	const videoData = {
		name: req.body.name,
		year: req.body.year
	}

	const res1 = await db.collection("video").add(videoData);
	console.log("Done id: ", res1.id);
});

app.post('/signup', async (req, res) => {
	const user = {
		email: req.body.email,
		password: req.body.password
	}

	const userResponse = await admin.auth().createUser({
		email: user.email,
		password: user.password,
		emailVerified: false,
		disabled: false
	});

	res.json(userResponse);

});

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
