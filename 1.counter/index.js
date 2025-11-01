let increasebutton= document.getElementById("increase");
let decreasebutton = document.getElementById("decrease");
let resetbutton = document.getElementById("reset");
let countlabel = document.getElementById("thenumber");
let count= 0;

increasebutton.onclick= function(){
    count++;
   countlabel.textContent=count;
}

decreasebutton.onclick= function(){
    count--;
    countlabel.textContent=count;

}
resetbutton.onclick= function(){
    count=0;
    countlabel.textContent=count
}