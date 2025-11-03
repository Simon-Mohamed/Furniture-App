/**
 * Header Component
 * Handles navigation functionality
 */
class Header {
  constructor() {
    this.init();
  }

  init() {
    // Initialize mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      navbarToggler.addEventListener('click', () => {
        const target = document.querySelector(navbarToggler.dataset.bsTarget);
        if (target) {
          target.classList.toggle('show');
        }
      });
    }
  }
}

// Export the Header component
export default Header;