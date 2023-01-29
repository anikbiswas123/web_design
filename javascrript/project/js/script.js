
var numberOne=parseInt(prompt("user Input number one"));
var logical=prompt("Enter aritmathic operatror");
var numberTwo=parseInt(prompt(" user Input number two"));

 switch(logical){
    case "+":
        document.write( numberOne+numberTwo);
        break;
    case "-":
        document.write("Result is:"+ numberOne-numberTwo);
        break;
    case "*":
        document.write("Result is:"+ numberOne*numberTwo);
        break;
    case "/":
        document.write("Result is:"+ numberOne/numberTwo);
        break;
        
    case "%":
        document.write("Result is:"+ numberOne%numberTwo);
        break;    
 }