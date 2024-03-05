let circle = document.getElementById("circle")
let upbtn=document.getElementById("up")
let downbtn=document.getElementById("down")

let rotateValue = circle.style.transform;
let rotateSum;

upbtn.addEventListener("click",()=>{
    rotateSum= rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})

downbtn.addEventListener("click",()=>{
    rotateSum= rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
})
