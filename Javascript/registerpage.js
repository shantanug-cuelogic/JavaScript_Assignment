
function arraycheck()
{
   var data = JSON.parse(localStorage.getItem("data"));
    if(data == undefined)
    {
     var database = new Array();
     return database;
     
    }
    
    return data;


}

function register(){
    var database = arraycheck();
    var Email = document.getElementById("email").value;
    var Firstname = document.getElementById("fname").value;
    var Lastname = document.getElementById("lname").value;
    var Gender = document.getElementById("gen").value;
   var Image = document.getElementById("img").value;
    var Address = document.getElementById("addr").value;
    var Password = document.getElementById("pass").value;

        
     var newdb = {Email: Email,
      Firstname: Firstname ,
      Lastname : Lastname ,
      Gender : Gender ,
      Image : Image ,
      Address : Address ,
      Password : Password,
     }

    database.push(newdb);
    console.log(database);

    localStorage.setItem("data",JSON.stringify(database));
    localStorage.setItem("username",Email);

}

