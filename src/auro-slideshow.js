/* eslint-disable max-lines */
/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from 'lit';
import { html } from 'lit/static-html.js';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import { AuroHeader } from '@aurodesignsystem/auro-header/src/auro-header.js';
import headerVersion from './headerVersion.js';

import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right.mjs';
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left.mjs';

// These should be replaced with pause/play icons when created by design
import arrowUp from '@alaskaairux/icons/dist/icons/interface/arrow-up.mjs';
import arrowDown from '@alaskaairux/icons/dist/icons/interface/arrow-down.mjs';

import styleCss from './style-css.js';

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = 7000;
    this.pagination = false;
    this.loop = false;
    this.slidesPerView = "auto";
    this.spaceBetweenSlides = 16;
    this.variant = "slideshow";

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.headerTag = versioning.generateTag('auro-header', headerVersion, AuroHeader);
  }

  /**
   * Registers the custom element with the browser.
   * @param {string} [name="auro-slideshow"] - Custom element name to register.
   * @example
   * AuroSlideshow.register("custom-slideshow") // registers <custom-slideshow/>
   */
  static register(name = "auro-slideshow") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSlideshow);
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {

      /**
       * The time in milliseconds between each slide change. Defaults to undefined.
       */
      autoplay: {
        type: Number,
        reflect: true
      },

      /**
       * If true, the slideshow will loop back to the first slide after reaching the last slide. Defaults to false.
       */
      loop: {
        type: Boolean,
        reflect: true
      },

      /**
       * If true, the slideshow will display pagination bullets for each slide.
       */
      pagination: {
        type: Boolean,
        reflect: true
      },

      /**
       * The number of slides per view. Defaults to 1.
       */
      slidesPerView: {
        type: String,
        reflect: true
      },

      /**
       * The pixel distance between slides when multiple slides are in view.
       */
      spaceBetweenSlides: {
        type: Number
      },

      /**
       * 'slideshow': pagination indicators will be showing underneat with auto-play the progressbar.
       * `slider`: prev/next button will show on hover and there will be no pagination indicator.
       * @default 'slidershow'
       */
      variant: {
        // 'slideshow', 'slider'
        type: String,
        reflect: true,
      }
    };
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-slideshow');

    this.handleHeaderSlotContent();
  }

  /**
   * @private
   */
  handleHeaderSlotContent() {
    const container = this.shadowRoot.querySelector('.container');
    const headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
    const subheaderSlot = this.shadowRoot.querySelector('slot[name="subheader"]');

    const hasHeaderContent = headerSlot && headerSlot.assignedNodes().length > 0;
    const hasSubheaderContent = subheaderSlot && subheaderSlot.assignedNodes().length > 0;

    if (hasHeaderContent && hasSubheaderContent) {
      container.classList.add('has-both-headers');
    } else if (hasHeaderContent) {
      container.classList.add('has-header-only');
    } else if (hasSubheaderContent) {
      container.classList.add('has-subheader-only');
    } else {
      container.classList.add('has-no-headers');
    }
  }

  get isPlaying() {
    if (!this.swiper || !this.swiper.autoplay) {
      return true;
    }
    return this.swiper.autoplay.running && !this.swiper.autoplay.paused;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.swiper.autoplay.pause();
    } else {
      this.swiper.autoplay.resume();
    }

    // rerender elements
    this.requestUpdate();
  }

  /**
   * 
   * @param {@private} event 
   * @returns 
   */
  initializeSwiper(event) {
    if (!event || !event.target) {
      return;
    }

    const swiperElement = this.shadowRoot.querySelector('.swiper');
    const swiperWrapper = this.shadowRoot.querySelector('.swiper-wrapper');
    const prevButton = this.shadowRoot.querySelector('.scroll-prev');
    const nextButton = this.shadowRoot.querySelector('.scroll-next');
    const paginationEl = this.shadowRoot.querySelector('.swiper-pagination');
    const slot = event.target;

    // Get the assigned slides from the slot
    const assignedSlides = slot.assignedElements();

    // Avoid reinitializing Swiper if there are no slides or if the Swiper is already initialized
    if (assignedSlides.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("No slides found inside slot.");
      // Avoid initializing if no slides are present
      return;
    }

    assignedSlides.forEach((slide) => {
      slide.classList.add('swiper-slide');
      slide.part = 'slide';
    });

    // Ensure we don't clear the swiper-wrapper content if the slides are updated dynamically
    if (!this.swiper) {
      // If no swiper instance exists, clear the swiper-wrapper and add the new slides
      swiperWrapper.innerHTML = '';
      assignedSlides.forEach((slide) => {
        swiperWrapper.appendChild(slide);
      });
    }

    // If the Swiper instance exists, just update it with the new slides
    if (this.swiper) {
      this.swiper.update();
    } else {
      const swiperConfig = {
        modules: [
          Navigation,
          Pagination,
          Autoplay
        ],
        loop: this.loop,
        slidesPerView: this.slidesPerView,
        spaceBetween: this.spaceBetweenSlides,
        centeredSlides: false,
        autoplay: this.autoplay ? {
          delay: this.autoplay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false,
        pagination: {
          el: paginationEl,
          clickable: true,
          // eslint-disable-next-line id-length
          renderBullet: (_, className) => `
              <span class="${className}"  tabindex="0">
                <div class="pagination-swiper-up__progress-bar-container">
                  <div class="pagination-swiper-up__progress"></div>
                </div>
              </span>
            `
        }
      };

      if (this.variant === 'slider') {
        swiperConfig.navigation = {
          nextEl: nextButton,
          prevEl: prevButton
        };
      }

      this.swiper = new Swiper(swiperElement, swiperConfig);
    }

    const allBullets = this.shadowRoot.querySelectorAll('.swiper-pagination-bullet');

    allBullets.forEach((bullet) => {
      bullet.addEventListener('keydown', (ke) => {
        if (ke.key === 'Enter' || ke.key === ' ') {
          // Prevent scrolling if space is used
          ke.preventDefault();

          // Simulate a click event
          bullet.click();
        }
      });
    });

    this.swiper.on('autoplayTimeLeft', (swiper, timeLeft, percentageLeft) => {
      const activeBullet = this.shadowRoot.querySelector('.swiper-pagination-bullet-active');

      // Reset all progress bars
      allBullets.forEach((bullet) => {
        const progressBar = bullet.querySelector('.pagination-swiper-up__progress');
        if (progressBar) {
          if (bullet === activeBullet) {
            // Fill progress bar to the passed percentage
            // eslint-disable-next-line no-magic-numbers
            progressBar.style.width = `${(1 - percentageLeft) * 100}%`;
          } else {
            // Reset width for all bullets
            progressBar.style.width = '0%';
          }
        }
      });
    });
  }

  /**
   * Internal function to generate the HTML for the icon to use.
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @param {boolean} hideIcon - Whether the icon should be hidden.
   * @returns {Element} The HTML element containing the SVG icon.
   */
  generateIconHtml(svgContent, hideIcon) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html');
    const svg = dom.body.firstChild;

    svg.setAttribute('slot', 'svg');

    const iconHtml = html`<${this.iconTag} customColor customSvg slot="icon" ?hidden="${hideIcon}">${svg}</${this.iconTag}>`;

    return iconHtml;
  }

  render() {
    return html`
      <div class="container">
        <${this.headerTag} class="header" display="700" level="2" no-margin-block>
          <slot name="header"></slot>
        </${this.headerTag}>
        <${this.headerTag} class="subheader" display="400" level="3" no-margin-block>
          <slot name="subheader"></slot>
        </${this.headerTag}>
        <div class="slideshow-wrapper">
          <div class="swiper">
            <div class="swiper-wrapper">
              <slot @slotchange="${this.initializeSwiper}"></slot>
            </div>
          </div>

          <!-- chevron buttons -->
          ${this.variant === 'slider' ? html`
            <${this.buttonTag}
            class="chevron-left"
            arialabel="Previous Item"
            rounded
            iconOnly
            @click=${() => this.swiper.slidePrev()}>
              ${this.generateIconHtml(chevronLeft.svg)}
            </${this.buttonTag}>
            <${this.buttonTag}
            class="chevron-right"
            arialabel="Next Item"
            rounded
            iconOnly
            @click=${() => this.swiper.slideNext()}>
              ${this.generateIconHtml(chevronRight.svg)}
            </${this.buttonTag}>
          ` : ''}
        </div>
  
        <div class="pagination-container">
          <${this.buttonTag} 
          arialabel="${this.isPlaying ? 'pause' : 'play'}"
          iconOnly rounded
          class="play-pause"
          @click=${this.togglePlay}>
            ${this.generateIconHtml(arrowUp.svg, !this.isPlaying)}
            ${this.generateIconHtml(arrowDown.svg, this.isPlaying)}
          </${this.buttonTag}>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `;
  }
}
