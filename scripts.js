// scripts.js - Basic JavaScript Template

// Run after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Scroll-based fade-in effect for elements with class 'fade-in'
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Log to console that scripts are running
  console.log("Page loaded and scripts running!");

  // Donate button alert interaction
  const donateButton = document.querySelector('.donate-button');
  if (donateButton) {
    donateButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Thank you for your support!');
    });
  }
  
  /* 
    Future enhancements ideas:
    - Modal pop-up windows to show more info about projects
    - Responsive menu toggles for mobile navigation
    - Form validation for donations/contact forms
    - Fetching data from APIs to show live impact stats
  */
});
//

document.addEventListener("DOMContentLoaded", function() {
  // Scroll-based fade-in effect
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  console.log("Page loaded and scripts running!");

  // Donate button alert interaction
  const donateButton = document.querySelector('.donate-button');
  if (donateButton) {
    donateButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Thank you for your support!');
    });
  }

  // Smooth scroll to top when clicking logo
  const logo = document.querySelector('.top-logo img');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Modal pop-up for more info
  const modal = document.querySelector('.modal');
  const modalOpenBtn = document.querySelector('.modal-open-btn');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  if (modal && modalOpenBtn && modalCloseBtn) {
    modalOpenBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});