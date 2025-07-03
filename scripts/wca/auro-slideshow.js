import { AuroSlideshow } from "../../src/auro-slideshow.js";

/**
 * @private
 */
class AuroSlideshowWCA extends AuroSlideshow {}

if (!customElements.get("auro-slideshow")) {
  customElements.define("auro-slideshow", AuroSlideshowWCA);
}
