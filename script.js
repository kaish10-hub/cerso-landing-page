document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAVIGATION TOGGLE ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle menu icon state (bars vs cross)
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // Close nav dropdown when selecting individual link options on mobile viewports
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // --- SCROLL ANIMATION FOR STICKY HEADER ---
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- QUOTE BLUEPRINT FORM HANDLING ---
  const quoteForm = document.getElementById('quoteForm');
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Construct request object from form values
    const data = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      businessName: document.getElementById('businessName').value.trim(),
      serviceNeeded: document.getElementById('serviceNeeded').value
    };

    console.log('Cerso Blueprint Form Captured:', data);
    
    // Flash visual confirmation alert
    alert(`Thank you, ${data.name}! Your request concerning "${data.serviceNeeded}" for "${data.businessName}" has been received. We will respond shortly.`);
    
    // Clear out form inputs
    quoteForm.reset();
  });
});