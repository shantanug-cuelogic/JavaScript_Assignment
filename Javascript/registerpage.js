
    var database = [];

function register(){
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
 

    database.push(newdb);
    console.log(database);

    localStorage.setItem("data",JSON.stringify(database));
  
  

}

/*
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
*/