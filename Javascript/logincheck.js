
function logincheck()
{
    var data = JSON.parse(localStorage.getItem("data"));
    
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;

    for(var i=0;i<data.length;i++)
    {
        if(username == data[i].Email)
        {
            if(password == data[i].Password)
            {
                alert("succesfully ");
                localStorage.setItem("username",username);
                window.location.href="../Pages/list.html";

            }
            else
            {
                alert("password is wrong");
            }
        }

        else if(username != data[i].Email){
            alert("username is wrong");
        }
    }  

  
}