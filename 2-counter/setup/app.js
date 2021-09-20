const buttons = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
let count = 0;

buttons.forEach((element) =>{
    element.addEventListener('click', () => {
        const classes = element.classList;
        if (classes.contains('decrease')) {
            count--;
        } else if (classes.contains('increase')){
            count++;
        } else if (classes.contains('reset')){
            count = 0;
        }

        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'rgb(34, 34, 34)';
        }

        value.textContent = count;
    });
});