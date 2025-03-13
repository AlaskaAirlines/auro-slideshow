import { AuroSlideshow } from './src/auro-slideshow.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-slideshow') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroSlideshow {});
  }
}

export { registerComponent }
