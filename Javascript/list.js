
var user = localStorage.getItem("username");
document.getElementById('hname').innerHTML=user;


function logout()
{
    localStorage.setItem("username",null);
    window.location.href="login.html";
}

function profile()
{
    window.location.href="profile.html";
}

function registration()
{
    window.location.href="../index.html";
}