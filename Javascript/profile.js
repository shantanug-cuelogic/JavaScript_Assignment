
var data = JSON.parse(localStorage.getItem("data"));
var user = localStorage.getItem("username");
var path;
var i,index;
for(i=0;i<data.length;i++)
{
    if(data[i].Email == user)
    {
        index=i;
        break;
    }
}

var fullname = data[index].Firstname + " " + data[index].Lastname;
document.getElementById('hname').innerHTML=fullname;

////////////////////////////////////////

////////////////////////////////////////////
document.getElementById("userimage").src=data[index].Image;

document.getElementById("email").value = data[index].Email;
document.getElementById("fname").value = data[index].Firstname;
document.getElementById("lname").value = data[index].Lastname;
//document.getElementById("img").value = data[index].Image;
document.getElementById("addr").value = data[index].Address;

document.getElementById("email").readOnly=true;
document.getElementById("fname").readOnly=true;
document.getElementById("lname").readOnly=true;
//document.getElementById("img").readOnly=true;
document.getElementById("addr").readOnly=true;




function listbtn()
{
    window.location.href="list.html"
}

function logout(){
    localStorage.setItem("username",null);
    window.location.href="login.html";
}

function editcontent(){

    document.getElementById("fname").readOnly=false;
    document.getElementById("lname").readOnly=false;
    document.getElementById("img").readOnly=false;
    document.getElementById("addr").readOnly=false;
    
}   


function savecontent(){
    
   
    document.getElementById("fname").readOnly=true;
    document.getElementById("lname").readOnly=true;
    document.getElementById("img").readOnly=true;
    document.getElementById("addr").readOnly=true;
    data[index].Address=document.getElementById("addr").value;
    data[index].Firstname=document.getElementById("fname").value;
    data[index].Lastname=document.getElementById("lname").value;
   var Image =document.getElementById("img").files[0];
    
    
    

    var reader = new FileReader();
    reader.readAsDataURL(Image);
   
    reader.onload = function () {
      
        reader.result;
        
      //console.log(reader.result);
    };

    //console.log(reader.onload.result);
    reader.onerror = function (error) {
      //console.log('Error: ', error);
    };
 

//console.log(reader.result);

    function getimage(path){
        data[index].Image=path;
        localStorage.setItem("data",JSON.stringify(data));

    }
    var 
    localStorage.setItem("data",JSON.stringify(data));
    location.reload();

}   