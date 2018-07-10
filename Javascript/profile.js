
var data = JSON.parse(localStorage.getItem("data"));
var user = localStorage.getItem("username");

var i,index;
for(i=0;i<data.length;i++)
{
    if(data[i].Email == user)
    {
        index=i;
        break;
    }
}
console.log(data[index].Firstname);

document.getElementById('fname').innerHTML=data[index].Firstname;
document.getElementById('lname').innerHTML=data[index].Lastname;
document.getElementById('email').innerHTML=data[index].Email;
document.getElementById('addr').innerHTML=data[index].Address;
document.getElementById('gen').innerHTML=data[index].Gender;

function listbtn()
{
    window.location.href="list.html"
}

function logout(){
    localStorage.setItem("username",null);
    window.location.href="login.html";
}