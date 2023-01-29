
// document.getElementById('ppp').innerHTML='my frist javascript';

// function myfunction(){
//     document.getElementById('ppp2').innerText='A paragraph is changed';
// }

// document.write('Javascript is world class programing languagess <br>');
// document.write(23+6);
// document.write('Hello program.<br>')


// document.write('<br>');
// // function use javascriprt

// function myfunctions(p1, p2){
//     return p1+p2;
// }

// document.getElementById('h2').innerHTML=myfunctions(10,20);


// var fristName="sumilon biswas ";

// console.log(fristName);
// console.log(typeof(fristName));

// var LName='A';
// console.log(LName);
// console.log(typeof(LName));

// var number=67;
// console.log(number);
// console.log(typeof(number));

// var x=7;
// var y=9;
// var z=x+y;
// document.write(y);
// console.log(y);

// document.write("<br>");

// var a=8;
// var res=a**2;
// console.log(res);
// document.write(res);

// console.log(Math.pow(4,4));
// console.log(Math.pow(3, 7));

// console.log((50+60)*6);

// let a=7;
// let res=(10+5)*a;
// console.log(res);

// console.log(typeof(0));
// console.log(typeof(1));
// console.log(typeof('A'));
// console.log(typeof(10.7));
// console.log(typeof("sumilon biswas anik"));

/// write chaptter function 

// function myfunction(){
//     document.write("Hello world!");
// }
// myfunction();
// console.log(myfunction());

// function hfunction(){
//     document.write(10+70);
// }
// hfunction();

// return types function


// function myfunction(a , b){
//     return a+b;
// }

// document.write(myfunction(10,20));


//create object

// const car = {type:"Fiat", model:"500", color:"white"};

// console.log(car.type);
// console.log(car.model);

// const person={fristName:"sumilon biswas " , lastName:"anik", age:"60",prefession:"student"};
// console.log(person.fristName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.prefession);

// function displaydata(){
//     document.getElementById('demo').innerHTML=Date();

// }
// setInterval(displaydata(),1000);


// var text="sumilon biswas anik";
// var t=text.length;
// console.log(t);

// var str="sumilon biswas anik";
// var text=str.slice(7,15);
// console.log(text);

// var str="Bangladesh is small country";
// var text=str.slice(10,16);
// console.log(text);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// let str = "Please locate where 'locate' occurs!";
// var text=str.indexOf("locate");
// console.log(text);
// var text1=str.search("locate");
// console.log(text1);

// var str="sumilon is good boy";
// var text=str.search("good");
// console.log(text);

// var strtype="Hablu programer";
// console.log(typeof (strtype));

// var numtype=67565.088;
// console.log(typeof(numtype));

// //Bloodem type variable

// var Boolemtype=true;
// console.log(typeof(Boolemtype));

// var boolemtype=false;
// console.log(typeof(boolemtype));

// var str="bangladesh";
// var text=str.toUpperCase();
// console.log(text);
// var str1="sumilon biswas anik";
// var show=str1.toUpperCase();
// console.log(show);

// var str="DHAKA ";
// var show=str.toLowerCase();
// console.log(show);

// var num1="7";
// var num2=10;
// var num3=90.00;
// console.log(typeof(num3));
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1+num2);

// var num1="88";
// var num2=88;
// var res=parseInt(num1)+num2;
// console.log(res);

// num4=80;
// num4=""+num4;
// console.log(typeof(num4));

// num5="99";
// num5=""+num5;
// console.log(typeof(num5));

/// simple calculator

// const fristnumber=parseInt(document.getElementById('fristnumber').value);
// const secondNumber=parseInt(document.getElementById('second-number').value);
// console.log(fristnumber+secondNumber);

// function myfunction(){
  
//     const res=fristnumber+secondNumber;
//     document.getElementById('demo').innerHTML=res;

// }

//math class method use

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.round(6.78));
// console.log(Math.abs(70));
// console.log(Math.floor(6.4));
// console.log(Math.ceil(6.7));
// console.log(Math.ceil(7.2));
// console.log(Math.trunc(10.45));
// console.log(Math.trunc(10.3));
// console.log(Math.trunc(-4.2));

// var lotary=Math.random()*5;
// console.log(lotary);


/// number mothods

// var x=7.980;
// console.log(typeof(x));

// console.log("our convert");
// var c=x.toString();
// console.log(typeof(c));

// let x = 9.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(3));
// console.log(x.toExponential(6));

// how to use to fixed method

// let x = 9.656;
// console.log(x.toFixed(1));
// console.log(x.toFixed(3));
// console.log(x.toFixed(7));

// let x = 9.656;
// console.log(x.toPrecision());
// console.log(x.toPrecision(6));

// let a=123.55;
// console.log(a.valueOf());
// console.log((110+40).valueOf());
// console.log((100+55).valueOf());

// /// convert method of 

// console.log(Number(true));
// console.log(Number(1));
// console.log(Number(false));
// console.log(Number("sumilon"));
// console.log(Number(12));
// console.log(Number(-12));

// var z=Number(new Date("2017-09-30"));
// console.log(z);

// var x=Number.MAX_VALUE;
// console.log(x);
// var y=Number.MIN_VALUE;
// console.log(y);


///date time methods 

// console.log(Date());
// console.log(new Date());
// var x=new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(x);

// const d = new Date("2015/03/25");
// console.log(d);

// const b=new Date();
// console.log(b.getFullYear());
// console.log(b.getDay());
// console.log(b.getMonth());

// var a=3;
// var b=4;
// if(a<b){
//     console.log("computer math thik asca!");
// }
// var x=8;
// var y=8;
// if(x==y){
//     console.log("messages is erro!")
// }

// var sum=4;

// switch(sum){
//     case 1:
//         console.log("number of value 1");
//       //  break;
//     case 2:
//         console.log("number of value 2");
//         // break;
//     case 3:
//         console.log("number of values 3");
//        // break;
//      case 4:
//         console.log("number of value 4");
//          break;
//     case 5:
//         console.log("number  of value 5");
//        /// break;  
        
//        default:
//          console.log("unknow number");
//       // break; 

// }

// var d=new Date();
// console.log(d.toDateString());
// console.log(d.getTime());
// console.log(d.toLocaleDateString());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());


// const Mnam=["sumilon","jibon","mirza","Lipon"];
// console.log(Mnam[0]);
// Mnam[4]="sumite";
// console.log(Mnam[4]);
// for(var i=0;i<=Mnam.length; i++){
//     console.log(Mnam[i]);
// }

// const number=[1,2,3,4,5,6,7,8,9,10];
// var sum=0;
// console.log(number);
// for(var i=0; i<=number.length;i++){
//     sum=sum+i;
   
// }
// console.log(sum)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(" Name of fruits :"))

// const fName=["jeshan","mousumie","monira","Happy","Nayrin"];
// console.log(fName.join(" * "));

// const serialNumber=[1,2,3,4,5,6,7,8,10];
// console.log(serialNumber.join(" # "))

// const fruits=["Banana","Orange","Apple","Mango"];
// console.log(fruits.join(" & "))
// console.log(fruits.pop());

// const cars=["jibon","simpa","Doale","hablue","shilu"];
// console.log(cars.pop());

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
//      fruit.push("Dive");
// console.log(fruit);

// const nameshow=["sumilon","Anik","seiymoon","jibon","liton"];
// nameshow.push(" Ronie");
// console.log(nameshow);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

//delect array operation
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// delete fruits[3];

// console.log(fruits);


// //contcat operation 

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const mychildren=myBoys.concat(myGirls);
// console.log(mychildren);

// var num=[1,2,3,4,5];
// var num1=[6,7,8,9,10];
// var result=num.concat(num1);
// console.log(result);


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
// console.log(fruits);

// function says(){
//   console.log("working hard and will be get success in life");
// }
// says();
// says();
// says();

// function doing(){
//     console.log("DO or Die !");
// }
// doing();
// doing();

// function squard(a){
//     console.log(Math.pow(a,2));
// }
// squard(6);
// squard(7);

// function add(a, b){
//     console.log(a+b);
// }
// add(10,20);

// function cheaking(a){
//     if(a/2==0){
//         console.log("it's even number !")
//     }
// }

// ///function calling 

// function callbackfunction(a,b){
//     return a+b;

// }
// console.log(callbackfunction(10,24));

// function compare(a,b){
//     if(a>b){
//         return -1;
//     }
//     else if(a<b){
//         return 1;
//     }
//     return 0;
// }

// var x=compare(4,2);
// console.log(x);

// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3, 4, 5)); // 15


// function add(){
//     let sum=0;
//     for(let i=0; i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5,6,7,8,89));

// function fun(){
//     console.log("This is fun Time !");
// }
// fun();
// fun();

// function displaydata(){
//     alert("Hi! programer javascript.");
// }
// function getdata(number){
//     alert(number*number*number);
// }

// function funtime(){
//     console.log("Hello world programer");
// }

// funtime();
// console.log("<br>")
// funtime();

// function myfunction(num, num1){
//     var total=num-num1;
//     console.log(total);
// }

// myfunction(60,40);


// function myifo(YourName,villages,phonenumber){
//     this.YourName=YourName;
//     this.villages=villages;
//     this.phonenumber=phonenumber;
//     this.showME=function(){
//         console.log(YourName+" "+villages+" "+phonenumber);
       
//     }
// }

// var obje=new myifo("sumilon","chandipur","01838467575");

// obje.showME();

function Authorinfo(AuthorName,Address,totalbook,gmail,phoneNumber)
{
    this.AuthorName=AuthorName;
    this.Address=Address;
    this.totalbook=totalbook;
    this.gmail=gmail;
    this.phoneNumber=phoneNumber;
    this.showinfo=function(){
        console.log(AuthorName);
        console.log(Address);
        console.log(totalbook);
        console.log(gmail);
        console.log(phoneNumber);
    }
}

const information=new Authorinfo("sumilon","Dhaka","55","sumilon@gmail.com","018374675844");
information.showinfo();

///function Expressio 

const getfullatrea=function(width,height){
    return height*width;
}

console.log(getfullatrea(6,8));

const result=function(y){
    return y*y;
}
console.log(result(8));













