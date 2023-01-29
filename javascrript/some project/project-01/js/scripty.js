


// function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("mySearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myMenu");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

// function myFunction(){
//     var input,filter,ul ,li,a,i;
//     input=document.getElementById("mySearch");
//     filter= filter = input.value.toUpperCase();
//     ul=document.getElementById("myMenu");
//     li=ul.getElementsByTagName("li");
//     for(i=0;i<li.length;i++){
//         a=li[i].getElementsByTagName("a")[0];
//         if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
//             li[i].style.display="";
//         }
//         else{
//             li[i].style.display="none";
//         }
//     }
// }

// function openNav(){
//     document.getElementById("mysidebar").style.width="250px";
//     document.getElementById("main").style.marginLeft="250px";
// }

// function closeNav(){
//     document.getElementById("mysidebar").style.width="0";
//     document.getElementById("main").style.width="0";
// }

var modal=document.getElementById('id01');

window.onclick=(event)=>{

    if(event.target==modal){
        document.getElementById('id01').style.display="none";
    }

}