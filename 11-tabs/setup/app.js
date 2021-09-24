const btnTab = document.querySelectorAll('.tab-btn'),
      content = document.querySelectorAll('.content');

// add first elements of btn and content container after DOM loaded
window.addEventListener('DOMContentLoaded', () => {
    btnTab[0].classList.add('active');
    content[0].classList.add('active');
});

btnTab.forEach((item) => {
    item.addEventListener('click', () => {

        // delete from all btns class "active" after click on any btn
        // after what - add class "active" to btn that was used
        btnTab.forEach((element) => {
            element.classList.remove('active');
        });
        item.classList.add('active');

        // delete from all content containers class "active" after click on any btn
        // after what - add class "active" to content container that conected with
        // used btn by data-id
        content.forEach((element) => {
            element.classList.remove('active');
            const idIndex = item.dataset.id;            
            if  (element.id == idIndex) {
                element.classList.add('active');
            }
        });
    });
});