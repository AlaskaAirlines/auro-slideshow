// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable line-comment-position, no-inline-comments, max-lines, lit/no-invalid-html, lit/binding-positions, no-magic-numbers */

import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleItemsCss from './style-items-css.js';

export class AuroSlideshowItem extends LitElement {
  constructor() {
    super();

    this.focusable = false;
  }

  /**
   * Registers the custom element with the browser.
   * @param {string} [name="auro-slideshowitem"] - The name of the custom element.
   */
  static register(name = 'auro-slideshowitem') {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSlideshowItem);
  }

  static get styles() {
    return [styleItemsCss];
  }

  static get properties() {
    return {
      focusable: {
        type: Boolean,
        reflect: true
      }
    };
  }

  render() {
    return html`
        <slot></slot>
    `;
  }
}
