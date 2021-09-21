const btnToggle = document.querySelector('.sidebar-toggle'),
      btnClose = document.querySelector('.close-btn'),
      sidebar = document.querySelector('.sidebar');

btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

btnClose.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});
