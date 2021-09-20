const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    
    let hexColor = getHexColor (hex);

    document.body.style.background = hexColor;
    color.textContent = hexColor;

}); 

function getHexColor (array) {
    let colorHex = ['#'];
    for (let i = 0; i < 6; i++){
        colorHex.push(array[Math.floor(Math.random()*array.length)]);
    }
    return colorHex.join('');
}