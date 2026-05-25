import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
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



const register = document.getElementById("register");
register.addEventListener("click", async () => {
   const name=document.getElementById("name").value;
   const email=document.getElementById("email").value;
   const password=document.getElementById("password").value;
   if(name == ""|| email == "" || password == "")
   {
    alert("bhr de bhayiii plzz")
    return;
   }
   try {
   
           await addDoc(collection(db, "users"), {
               name: name,
               email: email,
               password: password,
               
           });
   
           alert("hoshiyar ho gya tu to kr liyaa tuneee");
   
           document.getElementById("name").value = "";
           document.getElementById("email").value = "";
           document.getElementById("password").value = "";
           
   
       } catch (error) {
           console.log(error);
       }

});


