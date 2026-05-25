import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc
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



const container = document.getElementById("container");

const querySnapshot = await getDocs(collection(db, "borrowedBooks"));

querySnapshot.forEach((doc) => {

    const data = doc.data();

    container.innerHTML += `

       <div class="card">

          <h2>${data.bookName}</h2>

          <p>${data.borrowedBy}</p>

          <p>${data.email}</p>

       </div>

    `;
});