


function validateEmail(email) {

    

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  


function check(){

var Email = document.getElementById("email").value;
var Firstname = document.getElementById("fname").value;
var Lastname = document.getElementById("lname").value;
var Gender = document.getElementById("gen").value;
var Image = document.getElementById("img").files[0];
var Address = document.getElementById("addr").value;
var Password = document.getElementById("pass").value;


var checker =0;
if(validateEmail(Email))
{
    document.getElementById("emailparent").className="form-group has-success";
    checker +=1
}

else{
    document.getElementById("emailparent").className="form-group has-error";
    checker =0
}
if(Firstname.length!= 0)
{
    document.getElementById("fnameparent").className="form-group has-success";
    checker +=1;
}
else
{
    document.getElementById("fnameparent").className="form-group has-error";
    checker =0;
}
if(Lastname.length!= 0)
{
    document.getElementById("lnameparent").className="form-group has-success";
    checker +=1;
}
else
{
    document.getElementById("lnameparent").className="form-group has-error";
    checker =0;
    
}

if(Password.length!= 0)
{
    document.getElementById("passparent").className="form-group has-success";
    checker +=1;
}
else
{
    document.getElementById("passparent").className="form-group has-error";
    checker =0;
}
// console.log(Address.length);
//         if(Address.length!= 0)
//         {
//             document.getElementById("addrparent").className="form-group has-success";
//             checker +=1;
//         }
//         else
//         {
//             document.getElementById("addrparent").className="form-group has-error";
//             checker =0;
//         }


function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
   
    reader.onload = function () {
      var path= reader.result;
        console.log(path);
      getresult(path);
   
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 getBase64(Image);
function getresult(path){

if(checker == 4)
    {
        register(path);
        alert("Registered Succesfully");
   // window.open("list.html", "_self");
         window.location.href="Pages/list.html";
    }
    else if(checker==0)
    {
        alert("Please Fill All The Details");
    }
}
}