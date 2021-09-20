const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const buttonClick = document.getElementById("btn"),
    colorWrite = document.querySelector(".color");

buttonClick.addEventListener ('click',() => {
    
    colorWrite.innerHTML= "";
    let randomColor = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomColor];
    colorWrite.innerHTML = colors[randomColor];
});