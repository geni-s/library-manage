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
const addBtn=document.getElementById("add");
addBtn.addEventListener("click", async () => {

    const bookName = document.getElementById("text1").value;

    const authorName = document.getElementById("text2").value;
    const number = document.getElementById("text3").value;
    const text = document.getElementById("text4").value;
    if(bookName === "" || authorName === "" || number === "" || text === ""){
    alert("Fill all fields");
    return;
}
    try {

        await addDoc(collection(db, "books"), {
            book: bookName,
            author: authorName,
            quantity: number,
            category: text
        });

        alert("Book Added Successfully");

        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        document.getElementById("text3").value = "";
        document.getElementById("text4").value = "";

    } catch (error) {
        console.log(error);
    }

});
