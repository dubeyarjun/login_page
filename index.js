function Login()
{
    var uname=document.querySelector(".one").value;
    var pass=document.querySelector(".two").value;
   

if(uname==="arjun" && pass==="123456"){
    location.assign("http://127.0.0.1:5500/index2.html"); 
    //  console.log(uname);
    // console.log(pass);
}
else{
    
    window.alert("invalid");
}
}