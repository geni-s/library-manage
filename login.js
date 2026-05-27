import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVCyI9xHwhtq3r2aNoIAHgN55whitPQTU",
  authDomain: "library-48096.firebaseapp.com",
  projectId: "library-48096",
  storageBucket: "library-48096.firebasestorage.app",
  messagingSenderId: "20126572520",
  appId: "1:20126572520:web:a516ba66c490adeb880e5d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);






const login = document.getElementById("login");

login.addEventListener("click", async () => {
    loader.style.display = "flex";
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(email==""||password=="")
    {
       
      alert("Dont submit empty");
      return;
    }
    
        const querySnapshot = await getDocs(collection(db, "users"));

let found = false;

querySnapshot.forEach((doc) => {

    const data = doc.data();

    if(email === data.email && password === data.password)
    {
        found = true;
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);

    }

});

if(found)
{
    window.location.href = "borrowbook.html";
}
else

{
    
    alert("Wrong email or password");
}
});

const register = document.getElementById("register");

register.addEventListener("click", () => {

    window.location.href = "register.html";
});



