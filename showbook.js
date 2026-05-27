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

const bookContainer = document.getElementById("bookContainer");
let books = [];
async function getBooks() {

    const querySnapshot = await getDocs(collection(db, "books"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();
        books.push(
          {id:doc.id,
           ... data});

        bookContainer.innerHTML += `
        
        <div class="bookCard">

            <h2>Book: ${data.book}</h2>

            <p>Author: ${data.author}</p>

            <p>Quantity: ${data.quantity}</p>
             
             
        

            <p>Category: ${data.category}</p>
            <button class="borrow" onclick="borrow('${doc.id}','${data.book}',${data.quantity})">
              Borrow
            </button>

        </div>
        
        `;

    });







console.log(books);

const author=localStorage.getItem("author")||"";
const category=localStorage.getItem("category")||"";
const book=localStorage.getItem("book")||"";

const filteredBooks = books.filter((item) => {
    return (
       (item.author || "").toLowerCase().includes(author.toLowerCase()) &&
       (item.book ||"").toLowerCase().includes(book.toLowerCase()) &&
       (item.category|| "").toLowerCase().includes(category.toLowerCase())
    );
});
bookContainer.innerHTML = "";
filteredBooks.forEach((item) => {
          console.log(books);
       

        bookContainer.innerHTML += `
        
        <div class="bookCard">

            <h2>Book: ${item.book}</h2>

            <p>Author: ${item.author}</p>

            <p>Quantity: ${item.quantity}</p>
             
             
        

            <p>Category: ${item.category}</p>
       
         <button class="borrow" onclick='borrow("${item.id}","${item.book}",${item.quantity})'>
           Borrow
         </button>

        </div>
        
        `;
   });
}
getBooks();

window.borrow = async function(id, bookName, quantity)
{   

    if(quantity <= 0){
    alert("Book Out Of Stock");
    return;
}
    const userName = localStorage.getItem("name");

    const userEmail = localStorage.getItem("email");

    await addDoc(collection(db, "borrowedBooks"), {
        bookId: id,
        bookName: bookName,

        borrowedBy: userName,

        email: userEmail,
        date: new Date().toLocaleDateString(),

        time: new Date().toLocaleTimeString()

    });
     const newQuantity = Math.max(0, quantity - 1);

    await updateDoc(doc(db, "books", id), {

        quantity: newQuantity

    });


    alert("Book Borrowed ");
    location.reload();
}
