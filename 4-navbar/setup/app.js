// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btnToggle = document.querySelector(".nav-toggle"),
      links = document.querySelector('.links');

      console.log(btnToggle);
btnToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
    console.log(links.classList);
});
