const btnTab = document.querySelectorAll('.tab-btn'),
      content = document.querySelectorAll('.content'),
      sectionCenter = document.querySelector('.about-center');

sectionCenter.addEventListener('click', (event) => {

    const index = event.target.dataset.id;

    if (index) {
        btnTab.forEach((item) => {
            item.classList.remove('active');
        });
        content.forEach((item) => {
            item.classList.remove('active');
        });

        event.target.classList.add('active');
        content.forEach((item) => {
            if(item.id == index) {
                item.classList.add('active');
            }
        });
        
    }
});