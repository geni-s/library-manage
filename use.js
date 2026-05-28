import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
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
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((docsnap) => {

    const data = docsnap.data();

    container.innerHTML += `

       <div class="card" id="${docsnap.id}">

          <h2>${data.name}</h2>

          <p>${data.email}</p>
          <button class="remove" onclick="remove('${docsnap.id}')">
              Remove User
            </button>

       </div>

    `;
});
window.remove = async function(id) {

   try {

      await deleteDoc(doc(db, "users", id));

      document.getElementById(id).remove();

      alert("User deleted successfully");

   } catch(error) {

      console.log(error);
      alert("Error deleting user");

   }

}