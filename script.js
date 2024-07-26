num=document.getElementById("number");
document.getElementById("btn1").onclick=function(){
    let a= parseInt(num.innerHTML);
    num.innerHTML=a-1;
}


function initialize(){
    num.innerHTML="0";
}

function increment(){
    var a= parseInt(num.innerHTML);
    num.innerHTML=a+1;
}
var btn2= document.getElementById("btn2");
btn2.addEventListener("mouseover",function(){
    this.style="background-color:yellow";

})

btn2.addEventListener("mouseout",function(){ //if in html it's onmousout
    this.style="background-color: rgb(15, 214, 15)";

})
