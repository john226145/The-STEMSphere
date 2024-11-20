

const navbarElement = document.querySelector('.navbar');
const menuIconElement = document.querySelector('.menu-icon');
const navItemsElement = document.querySelector('.nav-items');
const navItemsLi = document.querySelectorAll('.nav-items li');

menuIconElement.addEventListener('click', () => {
  navItemsElement.classList.toggle('active');
});

// Handling the active state for navigation items
navItemsLi.forEach((item) => {
    item.addEventListener('click', () => {
      navItemsLi.forEach((li) => li.classList.remove('active')); // Remove active class from all
      item.classList.add('active'); // Add active class to clicked item
  });
});


const scrollTopBtn = document.querySelector('.scroll-top');
// Scroll to Top Functionality
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

// Smooth Scroll Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}








