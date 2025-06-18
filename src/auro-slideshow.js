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

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = false;
    this.delay = 7000;

    this.autoScroll = false;
    this.scrollSpeed = 1;
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
       * If true, the slideshow will start playing automatically on page load.
       */
      playOnInit: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Slide duration in milliseconds.
       */
      delay: {
        type: Number,
        reflect: true,
      },
      /**
       * Number of pixels auto scroll should advance per frame.
       */
      scrollSpeed: {
        type: Number,
        reflect: true,
      },
      /**
       * Delay in milliseconds before the auto scroll starts.
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

  get _dotsNode() {
    return this.shadowRoot.querySelector(".embla__dots");
  }

  get _progressNode() {
    return this.shadowRoot.querySelector(".embla__progress");
  }

  /** @private */
  initializeEmbla() {
    const emblaNode = this.shadowRoot.querySelector(".embla");
    const options = { loop: this.loop, align: "start" };

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
      stopOnMouseEnter: true,
    };

    const autoscrollOptions = {
      playOnInit: this.playOnInit,
      speed: this.scrollSpeed,
      startDelay: this.startDelay,
      stopOnMouseEnter: true,
    };

    const plugins = [ClassNames(classNamesOptions)];

    // Autoplay and AutoScroll cannot be used together.
    if (this.autoplay && this.autoScroll) {
      console.warn(
        "Autoplay and AutoScroll are not meant to be used together. Please select one.",
      );
      this.autoplay = false;
      this.autoScroll = false;
    }
    if (this.autoplay) {
      plugins.push(Autoplay(autoplayOptions));
    }
    if (this.autoScroll) {
      plugins.push(AutoScroll(autoscrollOptions));
    }

    // Attach slides to the Embla instance
    const emblaContainer = this.shadowRoot.querySelector(".embla__container");
    emblaContainer.replaceChildren(...this.slides);

    // Initialize Embla instance
    this.embla = EmblaCarousel(emblaNode, options, plugins);

    if (this.pagination) {
      this.addDotBtnsAndClickHandlers(
        this.embla,
        this._dotsNode,
        this.onNavButtonClick,
      );
    }

    if (this.autoplay) {
      this.addAutoPlayBtnListener(this.embla, this._playBtn);
      this.embla
        .on("autoplay:stop", () => {
          this.isPlaying = false;
        })
        .on("autoplay:play", () => {
          this.isPlaying = true;
        });
    }

    if (this.autoScroll) {
      this.addAutoScrollBtnListener(this.embla, this._playBtn);
      this.embla
        .on("autoScroll:stop", () => {
          this.isPlaying = false;
        })
        .on("autoScroll:play", () => {
          this.isPlaying = true;
        });
    }
  }

  firstUpdated() {
    this.updateSlides();
    this.initializeEmbla();

    // add event listener to embla instance to toggle tabindex on active slide whenever slide is changed
    this.embla.on("select", this.toggleTabIndex.bind(this));

    const emblaContainer = this.shadowRoot.querySelector(".embla__container");
    emblaContainer.replaceChildren(...this.slides);

    this.isPlaying = this.playOnInit;
  }

  /**
   * @private
   * Toggles the tabindex attribute on the active slide to allow keyboard navigation.
   */
  toggleTabIndex() {
    const activeSlide = this.slides[this.embla.selectedScrollSnap()];
    this.slides.forEach((slide) => {
      slide.setAttribute("tabindex", "-1");
    });
    activeSlide.setAttribute("tabindex", "0");
  }

  /**
   * @private
   * Handles the slot change event to update slides and reinitialize Embla.
   */
  handleSlotChange() {
    // Remove existing event listeners from slides
    this.slides.forEach((slide) => {
      slide.removeEventListener("keydown", this.handleKeydown.bind(this));
    });
    this.updateSlides();

    // Reinitialize Embla with new slides
    if (this.embla) {
      const emblaContainer = this.shadowRoot.querySelector(".embla__container");
      emblaContainer.replaceChildren(...this.slides);
      this.embla.reInit();
    }
  }

  /**
   * @private
   * @param {KeyboardEvent} event - The keydown event triggered by the user.
   * @returns {void}
   */
  handleKeydown(event) {
    const focusActiveSlide = () => {
      setTimeout(() => {
        const activeSlide = this.slides[this.embla.selectedScrollSnap()];
        activeSlide.focus();
      }, 200);
    };
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.embla.scrollPrev();
      focusActiveSlide();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      this.embla.scrollNext();
      focusActiveSlide();
    }
  }

  /** @private */
  updateSlides() {
    if (!this._slot) {
      return;
    }

    const slot = this._slot;
    slot.assignedElements().forEach((element, index) => {
      element.classList.add("embla__slide");
      element.addEventListener("keydown", this.handleKeydown.bind(this));
      if (index === 0) {
        element.setAttribute("tabindex", "0");
      } else {
        element.setAttribute("tabindex", "-1");
      }
    });
    this.slides = slot.assignedElements();
  }

  /**
   * @private
   * Stops autoplay when the user interacts with the navigation buttons.
   */
  onNavButtonClick = (emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  };

  /**
   * @private
   * Adds event listeners to the play button to control autoplay.
   */
  addAutoPlayBtnListener = (emblaApi, playBtn) => {
    const togglePlayBtnState = () => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      // Investigate why values are reversed
      this.playBtnLabel = autoplay.isPlaying()
        ? this.playLabel
        : this.pauseLabel;
    };

    const onPlayBtnClick = () => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
      playOrStop();
      this.isPlaying = autoplay.isPlaying();
    };

    playBtn.addEventListener("click", onPlayBtnClick);
    emblaApi
      .on("autoplay:play", togglePlayBtnState)
      .on("autoplay:stop", togglePlayBtnState)
      .on("reInit", togglePlayBtnState);

    return () => {
      playBtn.removeEventListener("click", onPlayBtnClick);
      emblaApi
        .off("autoplay:play", togglePlayBtnState)
        .off("autoplay:stop", togglePlayBtnState)
        .off("reInit", togglePlayBtnState);
    };
  };

  /**
   * @private
   * Adds event listeners to the play button to control auto scroll.
   */
  addAutoScrollBtnListener = (emblaApi, playBtn) => {
    const togglePlayBtnState = (emblaApi) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      this.playBtnLabel = autoScroll.isPlaying()
        ? this.playLabel
        : this.pauseLabel;
    };

    const onPlayBtnClick = () => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const playOrStop = autoScroll.isPlaying()
        ? autoScroll.stop
        : autoScroll.play;
      playOrStop();
      this.isPlaying = autoScroll.isPlaying();
    };

    playBtn.addEventListener("click", onPlayBtnClick);
    emblaApi
      .on("autoScroll:play", togglePlayBtnState)
      .on("autoScroll:stop", togglePlayBtnState)
      .on("reInit", togglePlayBtnState);

    return () => {
      playBtn.removeEventListener("click", onPlayBtnClick);
      emblaApi
        .off("autoScroll:play", togglePlayBtnState)
        .off("autoScroll:stop", togglePlayBtnState)
        .off("reInit", togglePlayBtnState);
    };
  };

  /**
   * @private
   * Adds dot buttons and click handlers for pagination.
   */
  addDotBtnsAndClickHandlers = (emblaApi, dotsNode, onButtonClick) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
      // Create new dot buttons using Lit's render
      const dots = emblaApi.scrollSnapList().map((_, index) => {
        const button = document.createElement("button");
        button.className = "embla__dot";
        button.type = "button";
        button.tabIndex = -1;
        button.addEventListener(
          "click",
          () => {
            emblaApi.scrollTo(index);
            if (onButtonClick) onButtonClick(emblaApi);
          },
          false,
        );
        return button;
      });

      // Use a single DOM operation to update dots
      dotsNode.replaceChildren(...dots);
      dotNodes = dots;
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
        }

        this.addAutoplayProgressListeners(this.embla, this._progressNode);
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

  disconnectedCallback() {
    super.disconnectedCallback();

    this.embla.off("select", this.toggleTabIndex.bind(this));

    // Clean up event listeners and Embla instance
    if (this.embla) {
      this.embla.destroy();
      this.embla = null;
    }

    // Remove all slides
    this.slides.forEach((slide) => {
      slide.removeEventListener("keydown", this.handleKeydown.bind(this));
    });
    this.slides = [];
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

    const iconHtml = html`<${this.iconTag} customColor customSvg ?hidden="${hideIcon}">${svg}</${this.iconTag}>`;

    return iconHtml;
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
        @click=${() => this.embla.scrollPrev()}>
        ${this.generateIconHtml(chevronLeft.svg)}
      </${this.buttonTag}>
      <${this.buttonTag} 
        aria-label="Next slide" 
        class="scroll-next"
        shape="circle"
        onDark
        size="lg"
        @click=${() => this.embla.scrollNext()}>
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
        ${this.autoplay || this.autoScroll ? this.renderPlayButton() : nothing}
        ${this.pagination ? html`<div class="embla__dots"></div>` : nothing}
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="slideshow-wrapper">
          ${this.navigation ? this.renderNavigationControls() : nothing}
          <div class="embla">
            <div class="embla__container">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          </div>
        </div>
        ${this.pagination || this.autoplay || this.autoScroll ? this.renderPaginationContainer() : nothing}
      </div>
    `;
  }
}
