const buttons = document.querySelectorAll('.btn'),
    contentNumber = document.getElementById('value');
let i = 0;

buttons.forEach(element => {

    element.addEventListener('click', () => {

        contentNumber.textContent = (element.classList.contains('decrease')) ? --i :
            (element.classList.contains('increase')) ? ++i :
            i = 0;
        contentNumber.style.color = (i > 0) ? 'green' :
            (i < 0) ? 'red' :
            '#222';
    });
});