
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
                alert("Logged in Succesfully");
                document.getElementById("unameparent").className="form-group has-success";
                document.getElementById("passparent").className="form-group has-success";

                localStorage.setItem("username",username);
                window.location.href="../Pages/list.html";

            }
            else
            {
                document.getElementById("passparent").className="form-group has-error";

            }
        }

        else if(i>=data.length){
            document.getElementById("unameparent").className="form-group has-error";
            document.getElementById("passparent").className="form-group has-error";

        }
    }  

  
}