/**
 * Main JavaScript file
 * Implements component-based architecture
 */

// Component imports
import Header from '../components/header/header.js';
import Hero from '../components/hero/hero.js';
import Products from '../components/products/products.js';
import Features from '../components/features/features.js';

// Component initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  const header = new Header();
  const hero = new Hero();
  const products = new Products();
  const features = new Features();
  
  // Initialize any global functionality
  initializeGlobalFunctionality();
});

/**
 * Initialize global functionality
 */
function initializeGlobalFunctionality() {
  // Add any global event listeners or functionality here
  const scrollLinks = document.querySelectorAll('a.scroll-link');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}