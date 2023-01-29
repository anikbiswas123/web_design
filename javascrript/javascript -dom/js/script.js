
//  let x = document.getElementById("Id1");
//  x.innerHTML="sumilon biswas anik";


// let pnote = document.querySelector("#pnote");
// console.log(pnote.parentNode);

// // let parentDiv = document.getElementById("parentchild");
// // console.log(parentDiv.firstChild);

// document.getElementById("pp").innerHTML =
// "Number of anchors are: " + document.anchors.length;

// document.getElementById('pp1').innerHTML="Number of achors link : "+document.anchors.item;
// document.getElementById('pp1').innerHTML="documet of the body"+document.body.innerHTML;
// document.getElementById("pp22").innerHTML="new heading";

// function validationform(){
//     let x=document.forms["myform"]["fname"].value;
//     if(x==""){
//         alert("Name must be filled out");
//         return false;
//     }
//     else{
//         alert("It's a valid form");
//     }
// }

// function validation(){
//     let x=document.forms["myform"]["fName"].value;
//     if(x==""){
//         alert("Name must be filled out");
//     }
//     else{
//         alert("successfully login");
//     }
// }

//  var p=document.getElementById("demo");

//  function onechang(){
//     p.style.color="red";
//  }

// function uppercase(){
//     let x=document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

// function uppperchase(){
//     let x=document.getElementById("fname");
//     x.value=x.value.toUpperCase();
// }

// function mOver(obj){
//     obj.innerHTML = "Thank You"
// }
// function mOut(obj){
//     obj.innerHTML="mouse out me";
// }

// function mDown(obj){
//     obj.style.backgroundColor = "#1ec5e5";
//     obj.innerHTML = "Release Me";
// }
// function mUp(obj){
//     obj.style.backgroundColor="#D94A38";
//     obj.innerHTML="thank you sona!"
// }

// document.getElementById("btn").addEventListener("click",callback);
// function callback(){
//     document.getElementById("demo").innerHTML=Date();
// }

// document.getElementById("btn").addEventListener("click",function(){
//     alert("Hey! programer of javascript");
// })

//  function tryforvalidation(){
//     var text="";
//     if(confirm("press a button!")){
//         text = "You pressed OK!";
//     }
//     else{
//         text="you press button cancel"
     
//     }
//     document.getElementById("demo").innerHTML=text;
//  }

// function pressbutton(){
//     let text="";
//     if(confirm("press a button!")){
//         text="you press button";
//     }
//     else{
//         text="you press button cancel";
//     }
//     document.getElementById("demo").innerHTML=text;
// }


function  validation(){
    let x=document.getElementById("fname").value;
    if(x=="#" && x=="@" && x==Number(x)){
        alert("correct input fill up");
    }
    else{
        alert("please fill up to crrectly");
    }
}

document.cookie = "username=John Doe";