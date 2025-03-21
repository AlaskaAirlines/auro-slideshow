// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-slideshow element provides users a way to ... (it would be great if you fill this out).
 *
 */

// build the component class
export class AuroSlideshow extends LitElement {
  // constructor() {
  //   super();
  // }

  static get properties() {
    return {
      // ...super.properties,
    };
  }

  static get styles() {
    return [styleCss];
  }
  
  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-slideshow"] - The name of element that you want to register to.
   *
   * @example
   * AuroSlideshow.register("custom-slideshow") // this will register this element to <custom-slideshow/>
   *
   */
  static register(name = "auro-slideshow") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSlideshow);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`

      <!-- this is demo code, DO NOT USE IN YOUR ELEMENT -->
      <div class=${this.cssClass} tabindex="0">
        <slot></slot>
      </div>
    `;
  }
}
