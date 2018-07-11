
var user = localStorage.getItem("username");
document.getElementById('hname').innerHTML=user;
var data= JSON.parse(localStorage.getItem("data"));

var index;
for(var i=0; i<data.length;i++ )
{
    if(user == data[i].Email)
    {
        index=i;
        break;
    }
}
//console.log(data[index].Todo.Status);

function logout()
{
    localStorage.setItem("username",null);
    window.location.href="login.html";
}

function profile()
{
    window.location.href="profile.html";
}

function registration()
{
    window.location.href="../index.html";
}

function createtodo(){
    window.location.href="createtodo.html";
}

function showtable(){
    // var new_tbody = document.createElement('tbody');
    // populate_with_new_rows(new_tbody);
    // old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    // alert("xyz");

for(var append=0;append<data[index].Todo.length;append++){

var x = document.createElement("TR");
x.setAttribute("id","listtr"+append);
document.getElementById("listtable").appendChild(x);


    var a =document.createElement("TD");
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","selectdata"+append);
    //input.setAttribute("onclick","c");
    //var b =document.createTextNode(input);
    a.appendChild(input);
    document.getElementById("listtr"+append).appendChild(a);

    var s =document.createElement("TD");
    var t =document.createTextNode(append);
    s.appendChild(t);   
    document.getElementById("listtr"+append).appendChild(s);



    var c =document.createElement("TD");
    var d =document.createTextNode(data[index].Todo[append].Name);
    c.appendChild(d);   
    document.getElementById("listtr"+append).appendChild(c);

    var e =document.createElement("TD");
    var f =document.createTextNode(data[index].Todo[append].Category);
    e.appendChild(f);
    document.getElementById("listtr"+append).appendChild(e);

    var g =document.createElement("TD");
    var h =document.createTextNode(data[index].Todo[append].Duedate);
    g.appendChild(h);
    document.getElementById("listtr"+append).appendChild(g);

    var i =document.createElement("TD");
    var j =document.createTextNode(data[index].Todo[append].Reminder);
    i.appendChild(j);
    document.getElementById("listtr"+append).appendChild(i);

    var k =document.createElement("TD");
    var l =document.createTextNode(data[index].Todo[append].Public);
    k.appendChild(l);
    document.getElementById("listtr"+append).appendChild(k);

    var m =document.createElement("TD");
    var n =document.createTextNode(data[index].Todo[append].Todonote);
    m.appendChild(n);
    document.getElementById("listtr"+append).appendChild(m);

    var o =document.createElement("TD");
    var p = document.createElement("P");
    p.setAttribute("id","status"+append);
    var r = document.createTextNode(data[index].Todo[append].Status);
    p.appendChild(r);
    o.appendChild(p);
    document.getElementById("listtr"+append).appendChild(o);

    var q =document.createElement("TD");
    var button = document.createElement("Input");
    button.setAttribute("type","Button");
    button.setAttribute("id",+append+".button");
    button.setAttribute("value","Done");
    button.setAttribute("onclick","done(this.id)")
    
    //var r =document.createTextNode("data");
    q.appendChild(button);
    document.getElementById("listtr"+append).appendChild(q);
}

}


function deletetodo()
{   var table = document.getElementById("listtable");
for(var i=0;i<data[index].Todo.length;i++)
    { 
        var check=document.getElementById('selectdata'+i);
    
        
        if(check.checked == true)
        {
            table.deleteRow(i);
            data[index].Todo.splice(i,1);
            localStorage.setItem("data",JSON.stringify(data));
            location.reload();    
        }
    
    }
}

function done(x){
 var str = x.split('.',1);
 document.getElementById("status"+str).innerHTML="Completed";
 data[index].Todo[str].Status="Completed";
 localStorage.setItem("data",JSON.stringify(data));
}

function displayoption(){
   document.getElementById("filterbtncategory").style.display="inline";
   document.getElementById("filterbtnstatus").style.display="inline";
   document.getElementById("filterbtn").style.display="none"; 
}

function displayoptioncategory(){
    if(document.getElementById("filterbtnstatus").style.display == "none")
    {
        document.getElementById("filterbtnstatus").style.display="inline";    
        document.getElementById("filteroptioncategory").style.display="none";
    }
    else{
        document.getElementById("filterbtnstatus").style.display="none";
    document.getElementById("filteroptioncategory").style.display="inline";
    }
    
}

function displayoptionstatus(){
    if(document.getElementById("filterbtncategory").style.display == "none")
    {
        document.getElementById("filterbtncategory").style.display="inline";    
        document.getElementById("filteroptionstatus").style.display="none";
    }
    else{
        document.getElementById("filterbtncategory").style.display="none";
    document.getElementById("filteroptionstatus").style.display="inline";
    }
    
}



function showfiltertable (fi)
{
    

        var x = document.createElement("TR");
        x.setAttribute("id","listtr"+fi);
        document.getElementById("listtable").appendChild(x);
        
        
            var a =document.createElement("TD");
            var input = document.createElement("input");
            input.setAttribute("type","checkbox");
            input.setAttribute("id","selectdata"+fi);
            //input.setAttribute("onclick","c");
            //var b =document.createTextNode(input);
            a.appendChild(input);
            document.getElementById("listtr"+fi).appendChild(a);
        
            var s =document.createElement("TD");
            var t =document.createTextNode(fi);
            s.appendChild(t);   
            document.getElementById("listtr"+fi).appendChild(s);
        
        
        
            var c =document.createElement("TD");
            var d =document.createTextNode(data[index].Todo[fi].Name);
            c.appendChild(d);   
            document.getElementById("listtr"+fi).appendChild(c);
        
            var e =document.createElement("TD");
            var f =document.createTextNode(data[index].Todo[fi].Category);
            e.appendChild(f);
            document.getElementById("listtr"+fi).appendChild(e);
        
            var g =document.createElement("TD");
            var h =document.createTextNode(data[index].Todo[fi].Duedate);
            g.appendChild(h);
            document.getElementById("listtr"+fi).appendChild(g);
        
            var i =document.createElement("TD");
            var j =document.createTextNode(data[index].Todo[fi].Reminder);
            i.appendChild(j);
            document.getElementById("listtr"+fi).appendChild(i);
        
            var k =document.createElement("TD");
            var l =document.createTextNode(data[index].Todo[fi].Public);
            k.appendChild(l);
            document.getElementById("listtr"+fi).appendChild(k);
        
            var m =document.createElement("TD");
            var n =document.createTextNode(data[index].Todo[fi].Todonote);
            m.appendChild(n);
            document.getElementById("listtr"+fi).appendChild(m);
        
            var o =document.createElement("TD");
            var p = document.createElement("P");
            p.setAttribute("id","status"+fi);
            var r = document.createTextNode(data[index].Todo[fi].Status);
            p.appendChild(r);
            o.appendChild(p);
            document.getElementById("listtr"+fi).appendChild(o);
        
            var q =document.createElement("TD");
            var button = document.createElement("Input");
            button.setAttribute("type","Button");
            button.setAttribute("id",+fi+".button");
            button.setAttribute("value","Done");
            button.setAttribute("onclick","done(this.id)")
            
            //var r =document.createTextNode("data");
            q.appendChild(button);
            document.getElementById("listtr"+fi).appendChild(q);
     
        }
        
        




function filterresult(option){

    for(var k=0;k<data[index].Todo.length;k++){
        var Table = document.getElementById("listtr"+k);
      Table.innerHTML = "";
      }

     if(option ==2 )
     { 
      var method = document.getElementById("filteroptionstatus").value;
      if(method == "pending")
      {
        for(var i=0;i<data[index].Todo.length;i++)
          {
       
            if(data[index].Todo[i].Status=="Pending")
                {
                console.log(i);
                showfiltertable(i);
                 }
          }
      }

      if(method == "complete")
      {
        for(var i=0;i<data[index].Todo.length;i++)
          {
       
            if(data[index].Todo[i].Status=="Completed")
                {
                console.log(i);
                showfiltertable(i);
                 }
          }
      }
    }
    else if(option == 1)
    {
        var method = document.getElementById("filteroptioncategory").value;
        if(method == "personal")
      {
        for(var i=0;i<data[index].Todo.length;i++)
          {
       
            if(data[index].Todo[i].Category=="Personal")
                {
                console.log(i);
                showfiltertable(i);
                 }
          }
      }
      else if(method == "office")
      {
        for(var i=0;i<data[index].Todo.length;i++)
          {
       
            if(data[index].Todo[i].Category=="Office")
                {
                console.log(i);
                showfiltertable(i);
                 }
          }
      }
      
      else if(method == "social")
      {
        for(var i=0;i<data[index].Todo.length;i++)
          {
       
            if(data[index].Todo[i].Category=="Social")
                {
                console.log(i);
                showfiltertable(i);
                 }
          }
      }

    }

}
