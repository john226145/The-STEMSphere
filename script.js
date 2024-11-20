
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


    
function showDetails(title, details) {
    // Get modal elements
    const modal = document.getElementById('detailsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetailsList = document.getElementById('modalDetailsList');
    
    // Set title and details in the modal
    modalTitle.textContent = title;
    modalDetailsList.innerHTML = ""; // Clear existing list items

    // Create list items for each detail
    details.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.textContent = detail;
        modalDetailsList.appendChild(listItem);
    });

    // Display the modal
    modal.style.display = 'flex';
}

function closeDetails() {
    // Hide the modal
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}






