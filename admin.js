import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVCyI9xHwhtq3r2aNoIAHgN55whitPQTU",
  authDomain: "library-48096.firebaseapp.com",
  projectId: "library-48096",
  storageBucket: "library-48096.firebasestorage.app",
  messagingSenderId: "20126572520",
  appId: "1:20126572520:web:a516ba66c490adeb880e5d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const login= document.getElementById("login");

login.addEventListener("click", () => {
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)

    .then(() => {

        

        window.location.href = "two.html";

    })

    .catch(() => {

        alert("Wrong Email or Password");

    });



    
});
