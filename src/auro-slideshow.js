// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from "lit/static-html.js";

// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";

// const emblaNode = document.querySelector(".embla");
// const options = { loop: false };
// const plugins = [Autoplay()];
// const emblaApi = EmblaCarousel(emblaNode, options, plugins);

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";
import buttonVersion from "./buttonVersion.js";

import { AuroIcon } from "@aurodesignsystem/auro-icon/src/auro-icon.js";
import iconVersion from "./iconVersion.js";

import chevronLeft from "@alaskaairux/icons/dist/icons/interface/chevron-left.mjs";
import chevronRight from "@alaskaairux/icons/dist/icons/interface/chevron-right.mjs";

import arrowDown from "@alaskaairux/icons/dist/icons/interface/arrow-down.mjs";
// These should be replaced with pause/play icons when created by design
import arrowUp from "@alaskaairux/icons/dist/icons/interface/arrow-up.mjs";

import styleCss from "./style.scss";

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
    this.isPlaying = true;

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
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
       * The time in milliseconds between each slide change. Defaults to undefined.
       */
      autoplay: {
        type: Number,
        reflect: true,
      },

      isPlaying: {
        type: Boolean,
      },

      /**
       * If true, the slideshow will loop back to the first slide after reaching the last slide. Defaults to false.
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
       * The number of slides per view. Defaults to 1.
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
       * 'slideshow': pagination indicators will be showing underneat with auto-play the progressbar
       * `slider`: prev/next button will show on hover and there will be no pagination indicator
       * @default 'slidershow'
       */
      variant: {
        // 'slideshow', 'slider'
        type: String,
        reflect: true,
      },
    };
  }

  firstUpdated() {
    console.log("first updated");
    this.handleHeaderSlotContent();

    const slot = this.shadowRoot.querySelector(
      'slot:not([name="header"]):not([name="subheader"])',
    );

    // Listen for the slotchange event to handle updates to slot content
    this.slotChangeListener = () => {
      this.initializeSwiper();
    };

    slot.addEventListener("slotchange", this.slotChangeListener);
  }

  handleHeaderSlotContent() {
    const container = this.shadowRoot.querySelector(".container");
    const headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
    const subheaderSlot = this.shadowRoot.querySelector(
      'slot[name="subheader"]',
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
    const swiperWrapper = this.shadowRoot.querySelector(".swiper-wrapper");
    const prevButton = this.shadowRoot.querySelector(".scroll-prev");
    const nextButton = this.shadowRoot.querySelector(".scroll-next");
    const playPauseButton = this.shadowRoot.querySelector(".play-pause");
    const paginationEl = this.shadowRoot.querySelector(".swiper-pagination");
    const slot = this.shadowRoot.querySelector(
      'slot:not([name="header"]):not([name="subheader"])',
    );

    if (!slot) {
      return;
    }

    // Get the assigned slides from the slot
    const assignedSlides = slot.assignedElements();

    // Avoid reinitializing Swiper if there are no slides or if the Swiper is already initialized
    if (assignedSlides.length === 0) {
      console.warn("No slides found inside slot.");
      return; // Avoid initializing if no slides are present
    }

    assignedSlides.forEach((slide) => {
      slide.classList.add("swiper-slide");
      slide.part = "slide";
    });

    // Detach the slotchange listener to prevent it from firing while manipulating the slot content
    slot.removeEventListener("slotchange", this.slotChangeListener);

    // Ensure we don't clear the swiper-wrapper content if the slides are updated dynamically
    if (!this.swiper) {
      // If no swiper instance exists, clear the swiper-wrapper and add the new slides
      swiperWrapper.innerHTML = ""; // Clear the wrapper, only if needed
      assignedSlides.forEach((slide) => {
        swiperWrapper.appendChild(slide);
      });
    }

    const swiperConfig = {
      modules: [Navigation, Pagination, Autoplay],
      loop: this.loop,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetweenSlides,
      centeredSlides: false,
      autoplay: this.autoplay
        ? {
            delay: this.autoplay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        : false,
      pagination: {
        el: paginationEl,
        clickable: true,
        renderBullet: (_, className) => {
          return `
            <span class="${className}"  tabindex="0">
              <div class="pagination-swiper-up__progress-bar-container">
                <div class="pagination-swiper-up__progress"></div>
              </div>
            </span>
          `;
        },
      },
    };

    if (this.variant === "slider") {
      swiperConfig.navigation = {
        nextEl: nextButton,
        prevEl: prevButton,
      };
    }

    if (this.autoplay) {
      playPauseButton.addEventListener("click", () => {
        if (this.swiper.autoplay.running) {
          this.swiper.autoplay.stop();
          this.isPlaying = false;
          playPauseButton.setAttribute("aria-label", "play");
        } else {
          this.swiper.autoplay.start();
          this.isPlaying = true;
          playPauseButton.setAttribute("aria-label", "pause");
        }
      });
    }

    // If the Swiper instance exists, just update it with the new slides
    if (this.swiper) {
      this.swiper.update();
    } else {
      this.swiper = new Swiper(swiperElement, swiperConfig);
    }

    const allBullets = this.shadowRoot.querySelectorAll(
      ".swiper-pagination-bullet",
    );

    allBullets.forEach((bullet) => {
      bullet.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault(); // Prevent scrolling if space is used
          bullet.click(); // Simulate a click event
        }
      });
    });

    // TODO: Add logic to the progress bar for pausing and playing the slideshow
    this.swiper.on("slideChange", () => {
      const activeBullet = this.shadowRoot.querySelector(
        ".swiper-pagination-bullet-active",
      );

      // Reset all progress bars
      allBullets.forEach((bullet) => {
        const progressBar = bullet.querySelector(
          ".pagination-swiper-up__progress",
        );
        if (progressBar) {
          progressBar.style.transition = "none"; // Disable transition for reset
          progressBar.style.width = "0%"; // Reset width for all bullets
        }
      });

      // Animate the progress bar of the active bullet
      if (activeBullet) {
        const progressBar = activeBullet.querySelector(
          ".pagination-swiper-up__progress",
        );
        if (progressBar) {
          progressBar.style.transition = `width ${swiperConfig.autoplay.delay}ms linear`;
          progressBar.style.width = "100%"; // Fill progress bar to 100%
        }
      }
    });

    // Reattach the slotchange event listener after the swiper is initialized
    slot.addEventListener("slotchange", this.slotChangeListener);
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

  render() {
    return html`
      <div class="container">
        <slot name="header"></slot>
        <slot name="subheader"></slot>
        <div class="slideshow-wrapper">
          <div class="swiper">
            <div class="swiper-wrapper">
              <slot></slot>
            </div>
          </div>

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
          
        </div>
  
        <div class="pagination-container">
          <${this.buttonTag} arialabel="play-pause" iconOnly rounded class="play-pause">
            ${this.generateIconHtml(arrowUp.svg, !this.isPlaying)}
            ${this.generateIconHtml(arrowDown.svg, this.isPlaying)}
            <span class="util_displayHiddenVisually">Play/Pause</span>
          </${this.buttonTag}>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `;
  }
}
