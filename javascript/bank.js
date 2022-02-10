document.getElementById("submit").addEventListener('click',function(){
     const emailV=document.getElementById("email").value;
     const pass=document.getElementById("pass").value;

     if(emailV=="shaharia@gmail.com"&& pass=="112233"){
         window.location.href="monnney.html";
     }
     else{
         alert("enter valid  email and password")
     }
 
})

