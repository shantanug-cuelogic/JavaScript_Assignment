var user = localStorage.getItem("username");
var data = JSON.parse(localStorage.getItem("data"));
var index;
for(var i=0; i<data.length;i++ )
{
    if(user == data[i].Email)
    {
        index=i;
        break;
    }
}

function tolist(){
    window.location.href="list.html";
}

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



function addtodo(){
var Name= document.getElementById("tname").value;
var Category= document.getElementById("category").value;
var Duedate= document.getElementById("duedate").value;

var rcheck = document.getElementById("remindercheck");

if(rcheck.checked==true)
    {
    var Reminder=document.getElementById("remindedate").value;
    }
else
    {
    var Reminder = "No Reminder Set";
    }

var pcheck= document.getElementById("publiccheck");

if(pcheck.checked == true)
    {
        
    var Public = "Todo is Public";
    }
else
    {
    var Public = "Todo is Not Public";
    }

var Todonote= document.getElementById("todonote").value;

var todoobj = {
    Name:Name,
    Category:Category,
    Duedate:Duedate,
    Reminder:Reminder,
    Public:Public,
    Todonote:Todonote,
    Status: "Pending",
}
alert("Created TODO Succesfully");
data[index].Todo.push(todoobj);
localStorage.setItem("data",JSON.stringify(data));

}// addtodo()