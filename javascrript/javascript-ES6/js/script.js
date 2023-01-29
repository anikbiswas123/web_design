



// let age=19;
// age=22;
// console.log(age);



// function sum(){
//     let num1=10;
//     let num2=20;
//     return num1+num2;
// }




// console.log(sum());

// for(var i=0; i<5; i++){
//     console.log("inside of loop "+i);
// }

// console.log("outside of loop"+i);

// function say(messages){
//     console.log(messages);
// }
// say("Hello! program ");


// function serialNumber(a,b,...number){
//     console.log(a,b,number);
// }
// serialNumber(123,234,1,2334,44,55,55,66,90);

// const array1=[1,2,3,4,5];
// const array2=[...array1, 6,7,8,9,10];
// console.log(array2);

// const number1=[1,2,3,4,5];
// const number2=[...number1,6,7,8,9,10];
// console.log(number2);


// function creatediv(height='100px',width='100px',border='1px solid red',color='red',background='blue'){
//     let div=document.createElement('div');
//     div.style.height=height;
//     div.style.width=width;
//     div.style.background=background;
//     div.style.color=color;
//     div.style.border=border;
//     document.body.appendChild(div);
//     return div;

// }
// creatediv();

// function creatediv(){
//     let div=document.createElement('div');
//     div.style.height='100px';
//     div.style.width='200px';
//     div.style.background='yellow';
//     div.style.color='orage';
//     div.style.border='1px solid blue';
//     document.body.appendChild(div);
//     return div;
// }

// creatediv();

// function info(messages,name)
// {
//     return{
//         messages,
//         name
//     }
// }
//   console.log(info("Hi! programer","sumilon biswas"))

//   const myarray=[1,3,4,6,5,6,7];
//   for(newarray of myarray){
//     console.log(newarray);
//   }

//   const obj={
//     name:"sumilo biswas anik",
//     age:35,
//     profession:'studet'
// }
// for(show in obj)
// {
//     console.log(p.name);
// }

// function creatediv(height='100px',width='100px',background='yellow',border='1px solid red')
// {
//   let div=document.createElement('div');
//   div.style.height=height;
//   div.style.width=width;
//   div.style.background=background;
//   div.style.border=border;
//   document.body.appendChild(div);
//   return div;
// }

// creatediv();

// const array=[1,2,3,4,5,6];
// let [a,b,c]=array;
// console.log(a);
// console.log(b);


// const NameShow=['sumilon','summon','Asif','jibon','litoN','Das'];
// let [a,b,c,...n]=NameShow;
// console.log(a);
// console.log(b);
// // console.log(n);

// const obj={
//     Name:"sumilon biswas",
//     Age:20,
//     profe:'stduent'

// }

// const{Name,Age,profe}=obj;

// console.log(Name);
// console.log(profe);


// class person{

//    constructor(Name){
//      this.Name=Name
//    }
//    getName(){
    
//     return  this.Name

//    }

// }

// let jhon=new person("sumilon biswas");
// console.log(jhon.Name);

// import {newmessages} from "./js/messages.js"; 
// console.log(newmessages);

// class syntax
// class Books{
 
//   constructor(BooKName,price){

//     this.BooKName=BooKName;
//     this.price=price;
//   }
// }

// const Bookinfo=new Books("javascript",900);
// console.log(Bookinfo);

// class mobile{
//   constructor(modalName,price){
//     this.modalName=modalName;
//     this.price=price;
//   }
// }

// const modileinfo=new mobile('sumsung-j-50',700000);
// console.log(modileinfo);


//class expersion

// const person=class{
//   constructor(name,age,profe){
//     this.name=name;
//     this.age=age;
//     this.profe=profe;
//   }
// }

// let newperson=new person("p.K howlader",59,'batpare');
// console.log(newperson.profe);
// console.log(newperson.age);

// class Books{
//   fun(){
//     console.log("Hey program");
//   }
// }


// let newbook= new Books();
// console.log(newbook.fun());

// class Bookinfo{
//   constructor(fristName,secodName){
//     this.fristName=fristName;
//     this.secodName=secodName;
//   }
//   show()
//   {
//     return this.fristName+" "+this.secodName;
//   }
// }

// let book=new Bookinfo("sumilon","biswas");
// console.log(book.fristName);
// console.log(book.secodName);
// console.log(book.show());


// class person{

//   constructor(pname, age ,profession)
//   {
//     this.pname=pname;
//     this.age=age;
//     this.profession=profession;
    
//   }
//    show()
//   {
   
//      return this.pname+" "+this.age+" "+this.profession+this.Dgree;

//    }
// }

// let persons=new person("sumilon biswas" +" " +22,+" "+ "student")
// console.log(persons.pname);
// console.log(persons.age);
// console.log(persons.profession);
// console.log(persons.show());

// class person{

//   static fun()
//   {
//     console.log("hey sumilon biswas ");
//   }

// }

// person.fun();


///class inhertaincres 

// class parents{

//   asserts1(){
//     console.log("eita amer dada assert");
//   }
//   asserts2()
//   {
//     console.log("eita amer baba assets");
//   }

// }

// class amer extends parents{
//   asserts3()
//   {
//     console.log("ei ta amer asserts ");
//   }
// }

// let asserting=new amer();
// console.log(asserting.asserts1());
// console.log(asserting.asserts2());
// console.log(asserting.asserts3());


// class grandfather{
//   show1()
//   {
//     console.log("Hi! MY grandfather.");
//   }
// }
// class father extends grandfather{
//    show2(){
//     console.log("my father is teacher");
//    }
// }
// class ami extends father{
//   show3(){
//     console.log("this is me!");
//   }
// }
// const asserting = new ami();
// console.log(asserting.show1());
// console.log(asserting.show2());
// console.log(asserting.show3());


// let add=()=>{
//   console.log("hello world");
// }

// add();

// let func=()=>
// {
//   return 10+20;
// }

//   console.log(func());


//   let sum=(x,y)=>{
//     return x+y;
//   }
//   console.log(sum(70,80));

// let myarray=['a','b','c'];
// for(var i=0; i<myarray.length;i++)
// {
//   document.write(myarray[i]);
// }

// let myarray=['a','b','c'];

// for(newarray of myarray)
// {
//   console.log(newarray);
// }

//strict mode

// 'use strict'

//  let x = 3.14; 
// console.log(x);

// 'use strict'
//  var  name="sumilon biswas anik";
// console.log(name);


var serialNumber=[10,23,34,56,77,80];

// serialNumber.forEach(myfun);

// function myfun(x)
// {
//   console.log(x);
// }

// serialNumber.forEach((x)=>{
//   console.log(x);
// })

// const Nameserial=["sumilon","Anik","summon","jibo"];

// Nameserial.forEach((x)=>{
//   console.log(x)
// })

//map fuction

// var number=[2,4,6,8];
// var number2=[];

// number.forEach(myfun)

// function myfun(x)
// {
//    number2.push(x)
// }
// console.log(number2);


//  var namearray=["sumilon","sofik","Romie","milon","titule"];
//  var namearray2=[];

//  namearray.forEach((x)=>{
   
//   namearray2.push(x);

//  })

//  console.log(namearray2);

// var number=[2,4,6,8,10];
// var number2=[];
// number.forEach((x)=>{
//   number2.push(x*2);
// });
// console.log(number2);

//map function

// var number=[2,4,6,8,10];
// var number1=number.map((x)=>{
//    return x;
// });
// console.log(number1);

// var number4=[2,4,6,8,10];
// var number3=number4.map((x)=>
// {
//   return x*x;
// });
// console.log(number3);

//filtering methods

// var ages=[2,4,8,19,76,9,10];
// var ages2=ages.filter((x)=>{
  
//   return x > 4;

// });
// console.log(ages2);

///HighOrder fuction

// let display=(something)=>
// {
//   console.log(something);
// }

// let heighOrderfun =(name,classis,callbackfun)=>{
  
//     let details=`my name is ${name} && I read in class ${classis}`;
//     callbackfun(details);

// }
// heighOrderfun("sumilon biswas anik","university",display);


// //erro handling

// // try{
// //   console.log("sumilon biswas anik");
// //   console.log("anik");
// //   console.log("good morning");
// // }
// // catch(sumilonerros){
// //   console.log("sumilonerros");
// // }

// /// one exmple of erro hadling

// // function myfunction(){

// //   const message = document.getElementById("p01");
// //   message.innerHTML = "";
// //   let x = document.getElementById("demo").value;

// //   try{
// //       if(x == "") throw "Empty";
// //       if(isNaN(x)) throw "not a number";
// //       x=Number(x);
// //       if(x<5) throw "too low";
// //       if(x>10) throw "too heigh";
// //   }
// //   catch(err){
// //     message.innerHTML = "Input is " + err;
// //   }

// // }

// // function myFunction() {
// //   const message = document.getElementById("p01");
// //   message.innerHTML = "";
// //   let x = document.getElementById("demo").value;
// //   try {
// //     if(x == "") throw "empty";
// //     if(isNaN(x)) throw "not a number";
// //     x = Number(x);
// //     if(x < 5) throw "too low";
// //     if(x > 10) throw "too high";
// //   }
// //   catch(err) {
// //     message.innerHTML = "Input is " + err;
// //   }
// // }

// // function myfunction(){

// //   const message=document.getElementById("p0");
// //   message.innerHTML= "";
// //   let x = document.getElementById("demo").value;

// //   try{
   
// //        if(x=="") throw "empty";
// //        if(isNaN(x)) throw " not a number";
// //        let age=18;
// //        if(age<=18) throw "hello baby ";
// //        else{
// //         throw "this is girldfriend";
// //        }

// //        x = Number(x);
// //        if(x < 5) throw "too low";
// //       if(x > 10) throw "too high";

// //   }
// //   catch(erro){
// //     message.innerHTML = "Input is " + erro;
// //   }

// // }




// // let promis=new promise((reslove, reject)=>{
 
// //   if(message){
// //     reslove([
// //       {name:"sumilon", gmail:"sumilon@gmail.com"},
// //       {name:"summon", gmail:"summon@gmail.com"}
// //     ])

// //   }
// //   else{
// //     reject("user is Not valid");
// //   }
// // });

// // promis.then((x)=>{
// //   console.log(x);
// // });
// // promis.catch((error)=>{
// //   console.log(error);
// // })



// let mypromise= new promise((reslove,reject)=>{

//   let message=true;

//   if(message){
//     reslove([
//       {userName:"sumilon" , Gmail:"sumilon@gmail.com"},
//       {userName:"Ronie",Gmail:"Rony@gmail.com"}
//     ])
//   }
//   else{
//     reject("user is not valid");
//   }

// });

// mypromise.then((x)=>{
//   console.log(x);
// })
// mypromise.catch((err)=>{
//   console.log(err);
// });

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {console.log(value)},
//   function(error) {console.log(error)}
// );

// let myPromise=new Promise((myResolve,Reject)=>{

//   let x= 2;
//   if(x == 4){
//     myResolve("ok");
//   }
//   else{
//     Reject("error");
//   }

// });

// myPromise.then((x)=>{
//   console.log(x);
// });
// myPromise.catch((err)=>{
//   console.log(err);
// })


//create a promise

// var message = 20;

// let mypromise= new Promise((Myreslove,Reject)=>{
//   if(message == 10){
//     Myreslove(" it's ok");
//   }
//   else{
//     Reject("it's error");
//   }
// });

// mypromise.then((x)=>{
//   console.log(x);
// });
// mypromise.catch((err)=>{
//   console.log(err);
// })

// let message=false;

// let mypromise= new Promise((myReslove, Reject)=>{ 
//   if(message){
//     myReslove([
//       {userName:"sumilon",gmail:"sumilon@gmail.com"},
//       {userName:"anik", gmail:"anik@gmail.com"}
//     ])
//   }
//   else{
//     Reject("user is not fund!")
//   }
// })

// mypromise.then((x)=>{
//   console.log(x);

// })
// mypromise.catch((err)=>{
//   console.log(err);
// })

/// async and awaites use

// function display(){
  
//    let mypromise  = new Promise((reslove)=>{
//     setTimeout(()=>{
//       reslove("I love Bangladesh");
//     },3000)
//   })
//   document.getElementById("demo").innerHTML =  myPromise;
// }
// display();

//   async function display(){
//   let mypromise= new Promise(function(reslove){
//     setTimeout(function(){
//       reslove("I love Bangladesh");
//     },2000)
//   })
//   document.getElementById("demo1").innerHTML=await mypromise;
// }
// display();

let message=false;

async function display()
{
  let mypromise=new Promise((myreslove,reject)=>{
    if(message){
      myreslove("I love country Bangladesh");
    }
    else{
      reject("I hate you sona");
    }
  })
  document.getElementById("demo1").innerHTML= await mypromise;
}
display();
