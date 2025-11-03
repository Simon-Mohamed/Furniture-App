/**
 * Products Component
 * Handles product section functionality
 */
class Products {
  constructor() {
    this.init();
  }

  init() {
    // Initialize product-specific functionality
    this.setupProductLinks();
  }

  setupProductLinks() {
    // Add click handlers to product items
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');
        if (href) {
          window.location.href = href;
        }
      });
    });
  }
}

export default Products;