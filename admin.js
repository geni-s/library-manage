const login= document.getElementById("login");

login.addEventListener("click", () => {
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(email=="admin@gmail.com" && password== "adminhumai")
     {
          window.location.href = "two.html";
     }
     else
    {
        alert('chutiyeee mtlb kuch bhi krna hai tekooo')
    }


    
});
