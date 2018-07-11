
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
console.log(data[index].Todo);

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

var x = document.createElement("TR");
x.setAttribute("id","listtr");
document.getElementById("listtable").appendChild(x);

for(var i = 0;i < 9;i++){
    var a =document.createElement("TD");
    var input = document.createElement("input");
input.type='checkbox';
    var b =document.createTextNode(input);
    a.appendChild(input);
    document.getElementById("listtr").appendChild(a);
}
// var c =document.createElement("TD");
// var d =document.createTextNode("data");
// c.appendChild(d);
// document.getElementById("listtr").appendChild(c);

// var e =document.createElement("TD");
// var f =document.createTextNode("data");
// e.appendChild(f);
// document.getElementById("listtr").appendChild(e);

// var g =document.createElement("TD");
// var h =document.createTextNode("data");
// g.appendChild(h);
// document.getElementById("listtr").appendChild(g);

// var i =document.createElement("TD");
// var j =document.createTextNode("data");
// i.appendChild(j);
// document.getElementById("listtr").appendChild(i);

// var k =document.createElement("TD");
// var l =document.createTextNode("data");
// k.appendChild(l);
// document.getElementById("listtr").appendChild(k);

// var m =document.createElement("TD");
// var n =document.createTextNode("data");
// m.appendChild(n);
// document.getElementById("listtr").appendChild(m);

// var o =document.createElement("TD");
// var p =document.createTextNode("data");
// o.appendChild(p);
// document.getElementById("listtr").appendChild(o);

// var q =document.createElement("TD");
// var r =document.createTextNode("data");
// q.appendChild(r);
// document.getElementById("listtr").appendChild(q);

}