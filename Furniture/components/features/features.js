/**
 * Features Component
 * Handles features section functionality
 */
class Features {
  constructor() {
    this.init();
  }

  init() {
    // Initialize features-specific functionality
    this.setupFeatureAnimations();
  }

  setupFeatureAnimations() {
    // Add animation to features when they come into view
    const features = document.querySelectorAll('.feature');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      features.forEach(feature => {
        observer.observe(feature);
      });
    }
  }
}

export default Features;