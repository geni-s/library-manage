const show = document.getElementById("show");

show.addEventListener("click", () => {

   window.location.href = "showbook.html";

   localStorage.removeItem("author");

   localStorage.removeItem("book");

   localStorage.removeItem("category");
});
const search=document.getElementById("search");

search.addEventListener("click", () => {
   const author=document.getElementById("text1").value;
   const book=document.getElementById("text3").value;
   const category=document.getElementById("text2").value;
   localStorage.setItem("author", author);
   localStorage.setItem("book", book);
   localStorage.setItem("category", category);
   

   window.location.href = "showbook.html";

});
const userEmail = localStorage.getItem("email");
const userName = localStorage.getItem("name");