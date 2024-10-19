let input = document.getElementById("input");
let resultStr = [];
let num = 0;
let opIndex;
function display(){
   let result = [];
   for(let i =0;i<resultStr;i++){

    }
    input.innerText = resultStr.join(" ");

}
function add(){
    resultStr.push("+");
    display();
}
function sub(){
    resultStr.push("-");
    display();
}
function div(){
    resultStr.push("/");
    display();
}
function mult(){
    resultStr.push("x");
    display();
}

function hello(){
    resultStr.length = 0;
    display();
}
function del(){
    resultStr.pop(resultStr.length -1);
    display();
}
//numbers
function one(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "." || resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ]) ){
        resultStr[resultStr.length - 1] += "1";
    }else{
        resultStr.push("1"); 
    } 
    display();
}
function two(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "2";
    }else{
        resultStr.push("2"); 
    } 
    display();
}
function three(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "3";
    }else{
        resultStr.push("3"); 
    } 
    display();
}
function four(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "4";
    }else{
        resultStr.push("4"); 
    } 
    display();
}
function five(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "5";
    }else{
        resultStr.push("5"); 
    } 
    display();
}
function six(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "6";
    }else{
        resultStr.push("6"); 
    } 
    display();
}
function seven(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "7";
    }else{
        resultStr.push("7"); 
    } 
    display();
}
function eight(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "8";
    }else{
        resultStr.push("8"); 
    } 
    display();
}
function nine(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "9";
    }else{
        resultStr.push("9"); 
    } 
    display();
}
function zero(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += "0";
    }else{
        resultStr.push("0"); 
    } 
    display();
}
function point(){
    if(!isNaN(resultStr[resultStr.length -1])|| resultStr[resultStr.length -1] == "-" && isNaN(resultStr[resultStr.length -2 ])){
        resultStr[resultStr.length - 1] += ".";
    }else{
        resultStr.push("."); 
    } 
    display();
}
function isOperator(op){
    if(op == "+" || op == "-" || op == "/" || op == "x"){
        return true;   
    }
    return false;
}
function equal(){
    for(let i = 0; i < resultStr.length; i++){
        for(let j = 0; j <resultStr.length; j++){
            if(isOperator(resultStr[j])){
                if(resultStr[j] == "x"){
                   num = Number(resultStr[j-1]) * Number(resultStr[j+1]); 
                }else if(resultStr[j] == "/"){
                    if(resultStr[j-1] == "0"){
                        resultStr = ["U can't divide a Zero!, Idiot!"];
                        break;
                    }
                    num = Number(resultStr[j-1]) / Number(resultStr[j+1]); 
                }else if(resultStr[j] == "+"){
                    num = Number(resultStr[j-1]) + Number(resultStr[j+1]); 
                }else if(resultStr[j] == "-"){
                    num = Number(resultStr[j-1]) - Number(resultStr[j+1]); 
                }
             resultStr[j] = num;
             resultStr.splice(j+1, 1);
             resultStr.splice(j-1, 1);
            }
            
           

         
        }
       
    }
     display();
}
