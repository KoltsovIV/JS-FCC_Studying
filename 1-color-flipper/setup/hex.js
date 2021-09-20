const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonClick = document.getElementById("btn"),
    colorWrite = document.querySelector(".color");

buttonClick.addEventListener('click', () => {

    colorWrite.innerHTML = "";

    let randomColor = [];
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length);
        randomColor[i] = hex[randomNumber];
    }    
    
    document.body.style.backgroundColor ='#' + randomColor.join('');
    colorWrite.innerHTML = '#' + randomColor.join('');
});