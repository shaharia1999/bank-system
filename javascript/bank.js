document.getElementById("submit").addEventListener('click',function(){
     const emailV=document.getElementById("email").value;
     const pass=document.getElementById("pass").value;

     if(emailV=="sontan@gmail.com"&& pass=="mababa"){
         window.location.href="monnney.html";
     }
     else{
         alert("enter invalid password")
     }
 
})

