
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

function editcontent(id){
 document.getElementById(id).contentEditable=true;   
}   


function savecontent(){
 data[index].Firstname= document.getElementById('fname').value;
 data[index].Lastname= document.getElementById('lname').value;
  data[index].Address= document.getElementById('addr').value;
 data[index].Gender= document.getElementById('gen').value;
   // localStorage.setItem("data",JSON.stringify(data));

    register(Email,Firstname,Lastname,Gender,Image,Address,Password);


}   