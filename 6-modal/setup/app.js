// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btnModal = document.querySelector('.modal-btn'),
      overlayModal = document.querySelector('.modal-overlay'),
      btnClose = document.querySelector('.close-btn');

btnModal.addEventListener('click', () => {
    overlayModal.classList.add('open-modal');
});

btnClose.addEventListener('click', () => {
    overlayModal.classList.remove('open-modal');
});