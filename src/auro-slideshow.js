// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable line-comment-position, no-inline-comments, max-lines, lit/no-invalid-html, lit/binding-positions, no-magic-numbers */

import { LitElement, nothing } from 'lit';
import { html } from 'lit/static-html.js';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right.mjs';
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left.mjs';

// TODO: These should be replaced with pause/play icons when created by design
import fakePlay from '@alaskaairux/icons/dist/icons/in-flight/entertainment-stroke.mjs';
import fakePause from '@alaskaairux/icons/dist/icons/in-flight/luggage-stroke.mjs';

import styleCss from './style-css.js';

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = false;
    this.delay = 2000; // Set default to 7000
    this.loop = false;
    this.navigation = false;
    this.pagination = false;
    this.slidesPerView = "auto";
    this.slides = [];
    this.spaceBetweenSlides = 16;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton
    );

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);
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
       * If true, the slideshow will play automatically.
       */
      autoplay: {
        type: Boolean,
        reflect: true,
      },

      /**
       * The time in milliseconds between each slide change. Defaults to 7000.
       */
      delay: {
        type: Number,
        reflect: true,
      },

      isPlaying: {
        type: Boolean,
      },

      /**
       * If true, the slideshow will loop back to the first slide after reaching the last slide.
       */
      loop: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If true, the slideshow will display pagination bullets for each slide.
       */
      pagination: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If true, the slideshow will display navigation arrows for previous and next slides.
       */
      navigation: {
        type: Boolean,
        reflect: true,
      },

      /**
       * The number of slides per view. Defaults to 'auto'.
       */
      slidesPerView: {
        type: String,
        reflect: true,
      },

      /**
       * The pixel distance between slides when multiple slides are in view.
       */
      spaceBetweenSlides: {
        type: Number,
      },

      /**
       * Array of slideshow items.
       * @private
       */
      slides: {
        type: Array,
        state: true,
      },
    };
  }

  /**
   * Whether the slideshow is currently playing.
   * @private
   * @returns {Boolean}
   */
  get isPlaying() {
    if (!this.swiper || !this.swiper.autoplay) {
      return false;
    }
    return this.swiper.autoplay.running;
  }

  updateSlides() {
    const slot = this.shadowRoot.querySelector("slot:not([name])");
    slot.assignedElements().forEach((element) => {
      element.classList.add("swiper-slide");
    });
    this.slides = slot.assignedElements();
  }

  /**
   * Toggles the play/pause state of the slideshow.
   * @returns {void}
   */
  togglePlay() {
    if (this.isPlaying) {
      this.swiper.autoplay.stop();
    } else {
      this.swiper.autoplay.start();
    }

    // rerender elements
    this.requestUpdate();
  }

  firstUpdated() {
    this.handleHeaderSlotContent();
    this.updateSlides();
    this.initializeSwiper();
    console.log("first updated", this.slides);
    // console.log(1, this.isPlaying);
  }

  handleSlotChange() {
    this.updateSlides();
    this.initializeSwiper();
    console.log("slot changed", this.slides);
    this.swiper.update();
    // console.log(2, this.isPlaying);
  }

  handleHeaderSlotContent() {
    const container = this.shadowRoot.querySelector(".container");
    const headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
    const subheaderSlot = this.shadowRoot.querySelector(
      'slot[name="subheader"]'
    );

    const hasHeaderContent =
      headerSlot && headerSlot.assignedNodes().length > 0;
    const hasSubheaderContent =
      subheaderSlot && subheaderSlot.assignedNodes().length > 0;

    if (hasHeaderContent && hasSubheaderContent) {
      container.classList.add("has-both-headers");
    } else if (hasHeaderContent) {
      container.classList.add("has-header-only");
    } else if (hasSubheaderContent) {
      container.classList.add("has-subheader-only");
    } else {
      container.classList.add("has-no-headers");
    }
  }

  initializeSwiper() {
    const swiperElement = this.shadowRoot.querySelector(".swiper");
    const prevButton = this.shadowRoot.querySelector(".scroll-prev");
    const nextButton = this.shadowRoot.querySelector(".scroll-next");
    const paginationEl = this.shadowRoot.querySelector(".swiper-pagination");
    const swiperWrapper = this.shadowRoot.querySelector(".swiper-wrapper");
    const assignedSlides = swiperWrapper.querySelectorAll(".swiper-slide");

    const swiperConfig = {
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
      loop: this.loop,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetweenSlides,
      centeredSlides: false,
      keyboard: {
        enabled: true,
      },
      effect: "coverflow",
      coverflowEffect: {
        depth: 0,
        modifier: 1,
        rotate: 0,
        slideShadows: false,
        stretch: 0,
      },
      autoplay: this.autoplay
        ? {
          delay: this.delay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }
        : false,
      pagination: this.pagination
        ? {
          el: paginationEl,
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className}"  tabindex="0">
            <div class="pagination-swiper-up__progress-bar-container">
            <div class="pagination-swiper-up__progress"></div>
            </div>
            </span>
          `,
        }
        : false,
      navigation: this.navigation
        ? {
          nextEl: nextButton,
          prevEl: prevButton,
        }
        : false,
    };


    swiperWrapper.innerHTML = '';
    assignedSlides.forEach((slide) => {
      swiperWrapper.appendChild(slide);
    });

    this.swiper = new Swiper(swiperElement, swiperConfig);

    const allBullets = this.shadowRoot.querySelectorAll(".swiper-pagination-bullet");

    allBullets.forEach((bullet) => {
      bullet.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault(); // Prevent scrolling if space is used
          bullet.click(); // Simulate a click event
        }
      });
    });

    this.swiper.on("autoplayPause", () => {
      this.requestUpdate();
    });
    this.swiper.on("autoplayResume", () => {
      this.requestUpdate();
    });

    this.swiper.on("autoplayTimeLeft", (swiper, timeLeft, percentageLeft) => {
      const activeBullet = this.shadowRoot.querySelector(".swiper-pagination-bullet-active");

      // Reset all progress bars
      allBullets.forEach((bullet) => {
        const progressBar = bullet.querySelector(
          ".pagination-swiper-up__progress"
        );
        if (progressBar) {
          if (bullet === activeBullet) {
            // Fill progress bar to the passed percentage
            progressBar.style.width = `${(1 - percentageLeft) * 100}%`;
          } else {
            // Reset width for all bullets
            progressBar.style.width = "0%";
          }
        }
      });
    });
  }

  /**
   * Internal function to generate the HTML for the icon to use.
   * @private
   * @param {string} svgContent - The SVG content to be embedded.
   * @param {boolean} hideIcon - Whether the icon should be hidden
   * @returns {Element} The HTML element containing the SVG icon.
   */
  generateIconHtml(svgContent, hideIcon) {
    const dom = new DOMParser().parseFromString(svgContent, "text/html");
    const svg = dom.body.firstChild;

    svg.setAttribute("slot", "svg");

    const iconHtml = html`<${this.iconTag} customColor customSvg slot="icon" ?hidden="${hideIcon}">${svg}</${this.iconTag}>`;

    return iconHtml;
  }

  /**
   * Generates the HTML for the navigation controls (previous and next buttons).
   * @private
   * @returns {Element} The HTML element containing the navigation controls.
   */
  navigationControls() {
    return html`
      <${
        this.buttonTag
      } arialabel="Previous slide" iconOnly rounded variant="secondary" class="scroll-prev"
        @click=${() => this.swiper.slidePrev()}>
        ${this.generateIconHtml(chevronLeft.svg)}
      </${this.buttonTag}>
      <${
        this.buttonTag
      } arialabel="Next slide" iconOnly rounded variant="secondary" class="scroll-next"
        @click=${() => this.swiper.slideNext()}>
        ${this.generateIconHtml(chevronRight.svg)}
      </${this.buttonTag}>`;
  }

  /**
   * Generates the HTML for the pagination controls.
   * @private
   * @returns {Element} The HTML element containing the pagination controls.
   */
  paginationControls() {
    // TODO: Separate play/pause button from pagination
    return html`
      <div class="pagination-container">
        <${this.buttonTag} arialabel="${this.isPlaying ? "Pause" : "Play"}"
          iconOnly rounded class="play-pause"
          @click=${this.togglePlay}>
          ${this.generateIconHtml(fakePlay.svg, this.isPlaying)}
          ${this.generateIconHtml(fakePause.svg, !this.isPlaying)}
        </${this.buttonTag}>
        <div class="swiper-pagination"></div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        <slot name="header"></slot>
        <slot name="subheader"></slot>
        <div class="slideshow-wrapper">
          ${this.navigation ? this.navigationControls() : nothing}
          <div class="swiper">
            <div class="swiper-wrapper">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          </div>
        </div>
        ${this.pagination ? this.paginationControls() : nothing}
      </div>
    `;
  }
}