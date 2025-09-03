// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, nothing } from "lit";
import { html } from "lit/static-html.js";

import EmblaCarousel from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";
import buttonVersion from "./buttonVersion.js";

import chevronLeft from "@alaskaairux/icons/dist/icons/interface/chevron-left.mjs";
import chevronRight from "@alaskaairux/icons/dist/icons/interface/chevron-right.mjs";
import pause from "@alaskaairux/icons/dist/icons/interface/pause.mjs";
import play from "@alaskaairux/icons/dist/icons/interface/play-filled.mjs";
import { AuroIcon } from "@aurodesignsystem/auro-icon/src/auro-icon.js";
import iconVersion from "./iconVersion.js";

import styleCss from "./style.scss";

/**
 * The auro-slideshow component is a customizable slideshow that displays a series of slides
 * with several options such as autoplay, navigation controls, and pagination dots.
 *
 * @slot - Default slot for the slides. Each child element will be treated as a slide.
 * @attr fullBleed - If set, the slideshow will take up the width of its parent container showing previous and next slides. **Note:** a parent container must have `overflow-x: hidden` to prevent horizontal scrolling.
 * @csspart prev-button - Use to style the previous button control.
 * @csspart next-button - Use to style the next button control.
 * @csspart play-pause-button - Use to style the play/pause button control.
 */
export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = false;
    this.delay = 7000;

    this.autoScroll = false;
    this.scrollSpeed = 0.75;
    this.startDelay = 1000;

    this.playOnInit = false;
    this.loop = false;
    this.navigation = false;
    this.pagination = false;

    this.playLabel = "Play slideshow";
    this.pauseLabel = "Pause slideshow";

    /** @private */
    this.playBtnLabel = this.playLabel;

    /** @private */
    this.isPlaying = false;

    /** @private */
    this.embla = null;

    /** @private */
    this.slides = [];

    /** @private */
    this.isHovered = false;

    /**
     * @private
     * The initial state or stop method has been called.
     */
    this.isStopped = true;

    const versioning = new AuroDependencyVersioning();

    /** @private */
    this.buttonTag = versioning.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /** @private */
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
       * If true, the slideshow will scroll continuously.
       */
      autoScroll: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If true, the slideshow will start playing automatically on page load when `autoplay` or `autoScroll` are on.
       */
      playOnInit: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Slide duration in milliseconds. (Only used with `autoplay`)
       */
      delay: {
        type: Number,
        reflect: true,
      },
      /**
       * Number of pixels auto scroll should advance per frame. (Only used with `autoScroll`)
       */
      scrollSpeed: {
        type: Number,
        reflect: true,
      },
      /**
       * Delay in milliseconds before the auto scroll starts. (Only used with `autoScroll`)
       */
      startDelay: {
        type: Number,
        reflect: true,
      },
      /**
       * The aria-label for the play button.
       * @default Play slideshow
       */
      playLabel: {
        type: String,
        reflect: true,
      },
      /**
       * The aria-label for the pause button.
       * @default Pause slideshow
       */
      pauseLabel: {
        type: String,
        reflect: true,
      },
      /**
       * If true, the slideshow will loop back to the first slide after reaching the last slide.
       */
      loop: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered.
       */
      navigation: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar.
       */
      pagination: {
        type: Boolean,
        reflect: true,
      },
      /**
       * @private
       */
      isPlaying: {
        type: Boolean,
      },
    };
  }

  get _slot() {
    return this.shadowRoot.querySelector("slot:not([name])");
  }

  get _playBtn() {
    return this.shadowRoot.querySelector(".play-pause");
  }

  get _prevBtn() {
    return this.shadowRoot.querySelector(".scroll-prev");
  }

  get _nextBtn() {
    return this.shadowRoot.querySelector(".scroll-next");
  }

  get _dotsNode() {
    return this.shadowRoot.querySelector(".embla__dots");
  }

  get _progressNode() {
    return this.shadowRoot.querySelector(".embla__progress");
  }

  // ========== PUBLIC METHODS =================

  /**
   * Starts the slideshow playback.
   * @returns {void}
   */
  play() {
    if (this.autoplay) {
      this.embla?.plugins()?.autoplay.play();
    } else if (this.autoScroll) {
      this.embla?.plugins()?.autoScroll.play();
    }
  }

  /**
   * Stops the slideshow playback.
   * @returns {void}
   */
  stop() {
    if (this.autoplay) {
      this.embla?.plugins()?.autoplay.stop();
    } else if (this.autoScroll) {
      this.embla?.plugins()?.autoScroll.stop();
    }
  }

  /**
   * Scrolls to the previous slide.
   * @returns {void}
   */
  scrollPrev() {
    this.embla.scrollPrev();
  }

  /**
   * Scrolls to the next slide.
   * @returns {void}
   */
  scrollNext() {
    this.embla.scrollNext();
  }

  // ========== PRIVATE METHODS =================

  /**
   * @private
   * Initializes the Embla carousel with the provided options and plugins.
   */
  initializeEmbla() {
    const emblaNode = this.shadowRoot.querySelector(".embla");
    const options = { loop: this.loop, align: "start", inViewThreshold: 0.5 };

    const classNamesOptions = {
      snapped: "active",
      inView: "in-view",
      loop: "",
      draggable: "",
      dragging: "",
    };

    const autoplayOptions = {
      playOnInit: this.playOnInit,
      delay: this.delay,
      stopOnLastSnap: !this.loop,
    };

    const autoscrollOptions = {
      playOnInit: this.playOnInit,
      speed: this.scrollSpeed,
      startDelay: this.startDelay,
    };

    const plugins = [ClassNames(classNamesOptions)];

    // Prevent both autoplay and autoScroll from being used simultaneously.
    if (this.autoplay && this.autoScroll) {
      console.warn(
        "Autoplay and AutoScroll are not meant to be used together. AutoScroll has been disabled.",
      );
      this.autoScroll = false;
    }
    if (this.autoplay) {
      plugins.push(Autoplay(autoplayOptions));
    }
    if (this.autoScroll && !this.isTouchDevice()) {
      plugins.push(AutoScroll(autoscrollOptions));
    }

    // Initialize Embla instance
    this.embla = EmblaCarousel(emblaNode, options, plugins);

    if (this.pagination) {
      this.addDotBtnsAndClickHandlers(
        this.embla,
        this._dotsNode,
        this.stopOnInteraction,
      );
    }

    if (this.navigation && !this.isTouchDevice()) {
      this.embla
        .on("select", this.toggleNavBtnsState)
        .on("init", this.toggleNavBtnsState)
        .on("reInit", this.toggleNavBtnsState);
    }

    if (this.autoplay) {
      this.embla
        .on("autoplay:stop", this.togglePlayButtonOnStop)
        .on("autoplay:play", this.togglePlayButtonOnPlay)
        .on("init", this.togglePlayButtonOnStop);
    }

    if (this.autoScroll && !this.isTouchDevice()) {
      this.embla
        .on("autoScroll:stop", this.togglePlayButtonOnStop)
        .on("autoScroll:play", this.togglePlayButtonOnPlay)
        .on("init", this.togglePlayButtonOnStop);
    }
  }

  /**
   * @private
   * Gets slides from the slot, adds necessary classes and event listeners,
   * and updates the Embla instance with the new slides.
   */
  updateSlides() {
    if (this._slot) {
      this.slides = Array.from(this._slot.assignedElements());

      this.slides.forEach((element, index) => {
        element.classList.add("embla__slide");
        element.addEventListener("keydown", this.handleKeydown);
        if (index === 0) {
          element.setAttribute("tabindex", "0");
        } else {
          element.setAttribute("tabindex", "-1");
        }
      });

      // Attach slides to the Embla instance
      const emblaContainer = this.shadowRoot.querySelector(".embla__container");
      emblaContainer.replaceChildren(...this.slides);
    }
  }

  // ========== PRIVATE HELPER METHODS =================

  /**
   * @private
   * Toggles the tabindex attribute on the active slide to allow keyboard navigation.
   */
  toggleTabIndex = () => {
    const activeSlide = this.slides[this.embla.selectedScrollSnap()];
    this.slides.forEach((slide) => {
      slide.setAttribute("tabindex", "-1");
    });
    activeSlide.setAttribute("tabindex", "0");
  };

  /**
   * @private
   * Toggles the icon and aria-label of the play button to stopped state.
   */
  togglePlayButtonOnStop = () => {
    this.isPlaying = false;
    this.playBtnLabel = this.playLabel;
  };

  /**
   * @private
   * Toggles the icon and aria-label of the play button to playing state.
   */
  togglePlayButtonOnPlay = () => {
    this.isPlaying = true;
    this.playBtnLabel = this.pauseLabel;
  };

  /**
   * @private
   * Adds and removes disabled attribute if at the beginning or end of the slideshow and loop is off.
   */
  toggleNavBtnsState = () => {
    if (this.embla.canScrollPrev()) {
      this._prevBtn.removeAttribute("disabled");
    } else {
      this._prevBtn.setAttribute("disabled", "");
    }

    if (this.embla.canScrollNext()) {
      this._nextBtn.removeAttribute("disabled");
    } else {
      this._nextBtn.setAttribute("disabled", "");
    }
  };

  /**
   * @private
   * Stops autoplay when the user interacts with the navigation controls or pagination dots.
   */
  stopOnInteraction = () => {
    if (this.isPlaying) {
      this.stop();
      this.togglePlayButtonOnStop();
      this.isStopped = true;
    }
  };

  /**
   * @private
   * Checks to see if the user is on a touch device.
   * @returns {boolean} True if touch device, false otherwise.
   */
  isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  // ========== EVENT HANDLERS =================

  /**
   * @private
   * Handles the slot change event to update slides and initialize or reinitialize Embla.
   * If the slot is empty, it will not initialize Embla.
   */
  handleSlotChange() {
    this.updateSlides();

    if (this.embla) {
      this.embla.reInit();
    } else {
      this.initializeEmbla();
    }

    // add event listener to embla instance to toggle tabindex on active slide whenever slide is changed
    this.embla.on("select", this.toggleTabIndex);

    // Set isPlaying to true if autoplay or autoScroll is enabled
    // this ensures that the play button label is set correctly on page load
    if (this.autoplay || (this.autoScroll && !this.isTouchDevice())) {
      this.isPlaying = true;
      if (this.playOnInit) this.isStopped = false;
    }
  }

  /**
   * @private
   * @param {string} direction - The direction of the navigation ("prev" or "next").
   * Handles click events on the previous and next buttons.
   */
  handleNavClick(direction) {
    if (direction === "prev") {
      this.scrollPrev();
    }
    if (direction === "next") {
      this.scrollNext();
    }
    this.stopOnInteraction();
  }

  /**
   * @private
   * @param {KeyboardEvent} event - The keydown event triggered by the user.
   * Allows users to navigate through the slideshow using left/right arrow keys.
   */
  handleKeydown = (event) => {
    const focusActiveSlide = () => {
      // Timeout added for UX optimization
      setTimeout(() => {
        const activeSlide = this.slides[this.embla.selectedScrollSnap()];
        activeSlide.focus();
      }, 200);
    };
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.scrollPrev();
      focusActiveSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      this.scrollNext();
      focusActiveSlide();
    }
  };

  /**
   * @private
   * Handles click events on the play button to toggle autoplay or autoScroll.
   */
  handlePlayClick() {
    if (this.isPlaying) {
      this.stop();
      this.togglePlayButtonOnStop();
      this.isStopped = true;
    } else {
      this.play();
      this.togglePlayButtonOnPlay();
      this.isStopped = false;
    }
  }

  /**
   * @private
   * Handles mouse enter event on the slideshow container to stop autoplay or autoScroll.
   */
  handleMouseEnter = () => {
    if (this.isPlaying) {
      this.stop();
      this.isHovered = true;
    }
  };

  /**
   * @private
   * Handles mouse leave event on the slideshow container to start autoplay or autoScroll.
   * It will only start playing if the slideshow was stopped by hovering.
   */
  handleMouseLeave = () => {
    if (!this.isPlaying && !this.isStopped && this.isHovered) {
      this.play();
      this.isHovered = false;
    }
  };

  // ========== DOTS AND PROGRESS BAR METHODS =================

  /**
   * @private
   * Adds dot buttons and click handlers for pagination.
   */
  addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
      const dots = emblaApi.scrollSnapList().map((_, index) => {
        const button = document.createElement("button");
        button.className = "embla__dot";
        button.type = "button";
        button.tabIndex = -1;
        button.setAttribute("aria-label", `Go to slide ${index + 1}`); // TODO: localization
        button.addEventListener(
          "click",
          () => {
            emblaApi.scrollTo(index);
            this.stopOnInteraction();
          },
          false,
        );
        return button;
      });

      dotsNode.replaceChildren(...dots);
      dotNodes = dots;
    };

    // 'stopped' class adds fill color to progress dot when not playing
    const toggleProgressStopped = () => {
      const selected = emblaApi.selectedScrollSnap();
      if (dotNodes[selected]) {
        dotNodes[selected].classList.toggle("stopped", !this.isPlaying);
      }
    };

    const toggleDotBtnsActive = () => {
      const previous = emblaApi.previousScrollSnap();
      const selected = emblaApi.selectedScrollSnap();

      if (this.autoplay) {
        const progressBar = document.createElement("div");
        progressBar.className = "embla__progress__bar";

        if (dotNodes[previous]) {
          dotNodes[previous].className = "embla__dot";
          dotNodes[previous].replaceChildren();
        }

        if (dotNodes[selected]) {
          dotNodes[selected].className = "embla__progress";
          dotNodes[selected].replaceChildren(progressBar);
          if (!this.isPlaying) {
            dotNodes[selected].classList.add("stopped");
          }
        }

        this.addAutoplayProgressListeners(this.embla, this._progressNode);

        emblaApi
          .on("autoplay:play", toggleProgressStopped) // Removes fill color when autoplay starts
          .on("autoplay:stop", toggleProgressStopped); // Adds fill color when autoplay stops (temp solution until paused state is implemented)
      } else {
        if (dotNodes[previous]) {
          dotNodes[previous].classList.remove("embla__dot--selected");
        }
        if (dotNodes[selected]) {
          dotNodes[selected].classList.add("embla__dot--selected");
        }
      }
    };

    emblaApi
      .on("init", addDotBtnsWithClickHandlers)
      .on("reInit", addDotBtnsWithClickHandlers)
      .on("init", toggleDotBtnsActive)
      .on("reInit", toggleDotBtnsActive)
      .on("select", toggleDotBtnsActive);

    return () => {
      dotsNode.replaceChildren();
    };
  };

  /**
   * @private
   * Adds autoplay progress listeners to the progress bar.
   * This function updates the progress bar animation based on the autoplay timer.
   */
  addAutoplayProgressListeners = (emblaApi, progressNode) => {
    const progressBarNode = progressNode.querySelector(".embla__progress__bar");

    let animationName = "";
    let timeoutId = 0;
    let rafId = 0;

    const startProgress = (emblaApi) => {
      this._progressNode.classList.remove("embla__progress--paused");
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const timeUntilNext = autoplay.timeUntilNext();
      if (timeUntilNext === null) return;

      if (!animationName) {
        const style = window.getComputedStyle(progressBarNode);
        animationName = style.animationName;
      }

      progressBarNode.style.animationName = "none";
      progressBarNode.style.transform = "translate3d(0,0,0)";

      rafId = window.requestAnimationFrame(() => {
        timeoutId = window.setTimeout(() => {
          progressBarNode.style.animationName = animationName;
          progressBarNode.style.animationDuration = `${timeUntilNext}ms`;
        }, 0);
      });
    };

    const stopProgress = (emblaApi) => {
      this._progressNode.classList.add("embla__progress--paused");
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;
    };

    emblaApi
      .on("autoplay:timerset", startProgress)
      .on("autoplay:timerstopped", stopProgress)
      .emit("autoplay:timerset"); // starts progress animation for playOnInit

    return () => {
      emblaApi
        .off("autoplay:timerset", startProgress)
        .off("autoplay:timerstopped", stopProgress);
    };
  };

  // ========== LIFECYCLE METHODS =================

  disconnectedCallback() {
    super.disconnectedCallback();

    // Clean up event listeners and Embla instance
    if (this.embla) {
      this.embla.off("select", this.toggleTabIndex);

      if (this.navigation && !this.isTouchDevice()) {
        this.embla
          .off("select", this.toggleNavBtnsState)
          .off("init", this.toggleNavBtnsState)
          .off("reInit", this.toggleNavBtnsState);
      }

      if (this.autoplay) {
        this.embla
          .off("autoplay:stop", this.togglePlayButtonOnStop)
          .off("autoplay:play", this.togglePlayButtonOnPlay);
      }

      if (this.autoScroll && !this.isTouchDevice()) {
        this.embla
          .off("autoScroll:stop", this.togglePlayButtonOnStop)
          .off("autoScroll:play", this.togglePlayButtonOnPlay);
      }

      this.embla.destroy();
      this.embla = null;
    }

    // Remove all slides
    this.slides.forEach((slide) => {
      slide.removeEventListener("keydown", this.handleKeydown);
    });
    this.slides = [];
  }

  // ========== RENDER METHODS =================

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

    return html`<${this.iconTag} style="--ds-auro-icon-size: inherit" customColor customSvg ?hidden="${hideIcon}">${svg}</${this.iconTag}>`;
  }

  /**
   * Generates the HTML for the navigation controls (previous and next buttons).
   * @private
   * @returns {Element} The HTML element containing the navigation controls.
   */
  renderNavigationControls() {
    return html`
      <${this.buttonTag} 
        aria-label="Previous slide" 
        class="scroll-prev"
        shape="circle"
        onDark
        size="lg"
        @click=${() => this.handleNavClick("prev")}
        part="prev-button">
        ${this.generateIconHtml(chevronLeft.svg)}
      </${this.buttonTag}>
      <${this.buttonTag} 
        aria-label="Next slide" 
        class="scroll-next"
        shape="circle"
        onDark
        size="lg"
        @click=${() => this.handleNavClick("next")}
        part="next-button">
        ${this.generateIconHtml(chevronRight.svg)}
      </${this.buttonTag}>`;
  }

  /** @private */
  renderPlayButton() {
    return html`
    <${this.buttonTag} 
      aria-label="${this.playBtnLabel}"
      class="play-pause"
      shape="circle"
      @click=${() => this.handlePlayClick()}
      part="play-pause-button"
      >
        ${this.generateIconHtml(play.svg, this.isPlaying)}
        ${this.generateIconHtml(pause.svg, !this.isPlaying)}
    </${this.buttonTag}>
    `;
  }

  /**
   * Generates the HTML for the pagination container, which includes the play button and pagination dots.
   * If autoplay or autoScroll is enabled, it will render the play button.
   * If pagination is enabled, it will render the dots.
   * @private
   */
  renderPaginationContainer() {
    return html`
      <div class="pagination-container">
        ${this.autoplay || (this.autoScroll && !this.isTouchDevice()) ? this.renderPlayButton() : nothing}
        ${this.pagination ? html`<div class="embla__dots"></div>` : nothing}
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="slideshow-wrapper">
          ${this.navigation && !this.isTouchDevice() ? this.renderNavigationControls() : nothing}
          <div class="embla">
            <div class="embla__container" @mouseenter=${this.handleMouseEnter} @mouseleave=${this.handleMouseLeave}>
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          </div>
        </div>
        ${
          this.pagination ||
          this.autoplay ||
          (this.autoScroll && !this.isTouchDevice())
            ? this.renderPaginationContainer()
            : nothing
        }
      </div>
    `;
  }
}
