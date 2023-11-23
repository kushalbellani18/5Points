import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
          apiKey: "AIzaSyDucZNwILSenNhYs2OmWb81lYLa8djjET0",
          authDomain: "basic-2dcf1.firebaseapp.com",
          databaseURL: "https://basic-2dcf1-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "basic-2dcf1",
          storageBucket: "basic-2dcf1.appspot.com",
          messagingSenderId: "499810632359",
          appId: "1:499810632359:web:dc19ad23e5f887f7559182",
          measurementId: "G-2ERK8V15EZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
