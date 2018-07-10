


function validateEmail(email) {

    

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  


function check(){

var Email = document.getElementById("email").value;
var Firstname = document.getElementById("fname").value;
var Lastname = document.getElementById("lname").value;
var Gender = document.getElementById("gen").value;
var Image = document.getElementById("img").value;
var Address = document.getElementById("addr").value;
var Password = document.getElementById("pass").value;

console.log(Email.length);
console.log(Firstname.length);

if(validateEmail(Email))
{

    if(Firstname.length!= 0)
    {
            if(Lastname.length!= 0)
            {
                
                register(Email,Firstname,Lastname,Gender,Image,Address,Password);
              alert("Registered Succesfully");
               // window.open("list.html", "_self");
              window.location.href="Pages/list.html";
            }
            else
            {
                document.getElementById("lname").style.color = "red" ;
            }
    }
    else
    {
        document.getElementById("fname").style.color = "red" ;
    }



}

else{
    document.getElementById("email").style.color = "red" ;
}

}
