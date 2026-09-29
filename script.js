alert("JavaScript is working!");

let count=0;

let countDisplay= document.getElementById("count");
let message=document.getElementById("message");
let increaseButton= document.getElementById("increase");
let decreaseButton=document.getElementById("decrease");
let resetButton=document.getElementById("reset");

increaseButton.onclick= function(){
count= count+1;
countDisplay.textContent=count;


};

decreaseButton.onclick=function(){
    if ( count > 0){
    count=count -1;
    countDisplay.textContent=count;
    }
};

resetButton.onclick=function(){
    if(count>0)
    count=0;
    countDisplay.textContent=count;


};

