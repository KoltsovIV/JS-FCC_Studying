const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {

    let num = randomNumber(colors);

    document.body.style.background = colors[num];
    color.textContent = colors[num];

}); 

function randomNumber (array) {
    return Math.floor(Math.random()*array.length);
}