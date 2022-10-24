// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX9zRh6LTTmv1X-1uoeQXPqRxESQEC33Y",
    authDomain: "b610-learning-platform.firebaseapp.com",
    projectId: "b610-learning-platform",
    storageBucket: "b610-learning-platform.appspot.com",
    messagingSenderId: "690958575336",
    appId: "1:690958575336:web:8b6f1363ab2561d495cb5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;