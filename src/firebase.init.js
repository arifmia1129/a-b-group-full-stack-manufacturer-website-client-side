// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw_LiP2sejLpqRE-pdpdBu14H1XY6NnyA",
    authDomain: "a-b-group.firebaseapp.com",
    projectId: "a-b-group",
    storageBucket: "a-b-group.appspot.com",
    messagingSenderId: "571213781529",
    appId: "1:571213781529:web:82fd1bd4ad8ac0997fe888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;