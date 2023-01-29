
// input loader element

const  loader=document.querySelector('.loader');


// select input elements

const  submitbtn=document.querySelector('.sumite-btn');
const name = document.querySelector('#name');

const email=document.querySelector('#email');
const password=document.querySelector('#password');
const trac=document.querySelector('#trems-of-cond');
const number=document.querySelector('#number');
const notification=document.querySelector('#notification');


submitbtn.addEventListener('click',()=>{
    if(name.value.length<3){
        showalert("user name must be minmum charactor 3up!")
       setTimeout(showalert,1000);
    }
    else if(!email.value.length){
       showalert("Enter you  Email!");
      
    }
    else if(password.value.length<8){
        showalert('password should be 8 chractor long!');
        
    }
    else if(!number.value.length){
        showalert('Enter your number !');
        
    }
    else if(!Number(number.value)||number.value.lengthv < 10){
        showalert('Invalid number, please valid number')
        
    }
    else if(!trac.checked){
        ('you must agree to our tream and conditions.')
       
    }
    else{
      // alert sumite funcrtion
     
     alert(document.querySelector('.card-desgin').style.visibility='visible');
    }
   

});




// const sucessfull=()=>{
   
//     const showbox=document.getElementsByClassName('card-desgin').style.display=block;
// }



const showalert=(msg)=>{
    
    let alertbox=document.querySelector('.alert-btn');
    let alertmsg=document.querySelector('.alert-msg');
    alertmsg.innerHTML=msg;
    alertbox.classList.add('show');
}
