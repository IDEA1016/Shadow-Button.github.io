const firstCircle = document.querySelector(".first-container .circle__third");
const secondCircle = document.querySelector(".second-container .circle__third");
const thirdCircle = document.querySelector(".third-container .circle__third");
const fourthCircle = document.querySelector(".fourth-container .circle__third");
const body = document.querySelector("body");


function handleFirst(){
    body.style.backgroundColor="tomato";
}
function handleSecond(){
    body.style.backgroundColor="orange";
}
function handleThird(){
    body.style.backgroundColor="yellowgreen";
}
function handleFourth(){
    body.style.backgroundColor="green";
}
function handleMouseup(){
    body.style.backgroundColor="var(--main-bg-color)";
}

firstCircle.addEventListener("mousedown", handleFirst);
secondCircle.addEventListener("mousedown", handleSecond);
thirdCircle.addEventListener("mousedown", handleThird);
fourthCircle.addEventListener("mousedown", handleFourth);
body.addEventListener("mouseup", handleMouseup);