/**
 * Hero Component
 * Handles hero section functionality
 */
class Hero {
  constructor() {
    this.init();
  }

  init() {
    // Initialize any hero-specific functionality
    const exploreBtn = document.querySelector('.hero .btn-white-outline');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.product-section').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }
}

export default Hero;