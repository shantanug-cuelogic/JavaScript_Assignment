var user = localStorage.getItem("username");
var data = JSON.parse(localStorage.getItem("data"));



function logout()
{
    localStorage.setItem("username",null);
    window.location.href="login.html";
}

function profile()
{
    window.location.href="profile.html";
}

function addreminder()
{
var check = document.getElementById("remindercheck");
var showdate = document.getElementById("remindedate");

if(check.checked==true)
{
    showdate.style.display="block";
}
else
{
    showdate.style.display="none";
}

}