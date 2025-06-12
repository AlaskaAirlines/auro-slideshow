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

import { AuroIcon } from "@aurodesignsystem/auro-icon/src/auro-icon.js";
import iconVersion from "./iconVersion.js";

import chevronLeft from "@alaskaairux/icons/dist/icons/interface/chevron-left.mjs";
import chevronRight from "@alaskaairux/icons/dist/icons/interface/chevron-right.mjs";

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

    this.playBtnLabel = "Play slideshow";

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
       * If true, the slideshow will start playing automatically when initialized.
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
       * The label for the play button.
       */
      playBtnLabel: {
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
       * If true, the slideshow will display navigation arrows for previous and next slides.
       */
      navigation: {
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
       * @private
       */
      isPlaying: {
        type: Boolean,
      },
    };
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
    this.embla.on("select", () => {
      const activeSlide = this.slides[this.embla.selectedScrollSnap()];
      this.slides.forEach((slide) => {
        slide.setAttribute("tabindex", "-1");
      });
      activeSlide.setAttribute("tabindex", "0");
    });

    const emblaContainer = this.shadowRoot.querySelector(".embla__container");
    emblaContainer.replaceChildren(...this.slides);

    console.log("first updated", this.slides);

    this.isPlaying = this.playOnInit;
  }

  /** @private */
  handleSlotChange() {
    // this.updateSlides();
  }

  /**
   * @private
   * @param {KeyboardEvent} event - The keydown event triggered by the user.
   * @returns {void}
   */
  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      this.embla.scrollPrev();
    } else if (event.key === "ArrowRight") {
      this.embla.scrollNext();
    }
    // move focus to the active slide
    const activeSlide = this.slides[this.embla.selectedScrollSnap()];
    activeSlide.focus();
  }

  /** @private */
  updateSlides() {
    const slot = this.shadowRoot.querySelector("slot:not([name])");
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

      // Not sure why these are reversed. Embla is weird.
      this.playBtnLabel = autoplay.isPlaying()
        ? "Play Slideshow"
        : "Pause Slideshow";
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
        ? "Play Slideshow"
        : "Pause Slideshow";
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
      dotsNode.innerHTML = emblaApi
        .scrollSnapList()
        .map(
          () =>
            '<button class="embla__dot" type="button" tabindex="-1"></button>',
        )
        .join("");

      const scrollTo = (index) => {
        emblaApi.scrollTo(index);
        if (onButtonClick) onButtonClick(emblaApi);
      };

      dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
      dotNodes.forEach((dotNode, index) => {
        dotNode.addEventListener("click", () => scrollTo(index), false);
      });
    };

    const toggleDotBtnsActive = () => {
      const previous = emblaApi.previousScrollSnap();
      const selected = emblaApi.selectedScrollSnap();

      if (this.autoplay) {
        const progressBar = document.createElement("div");
        progressBar.classList.add("embla__progress__bar");

        dotNodes[previous].classList.replace("embla__progress", "embla__dot");
        dotNodes[previous].removeAttribute("tabindex");
        dotNodes[previous].replaceChildren();

        dotNodes[selected].classList.replace("embla__dot", "embla__progress");
        dotNodes[selected].setAttribute("tabindex", "-1");
        dotNodes[selected].appendChild(progressBar);

        this.addAutoplayProgressListeners(this.embla, this._progressNode);
      } else {
        dotNodes[previous].classList.remove("embla__dot--selected");
        dotNodes[selected].classList.add("embla__dot--selected");
      }
    };

    emblaApi
      .on("init", addDotBtnsWithClickHandlers)
      .on("reInit", addDotBtnsWithClickHandlers)
      .on("init", toggleDotBtnsActive)
      .on("reInit", toggleDotBtnsActive)
      .on("select", toggleDotBtnsActive);

    return () => {
      dotsNode.innerHTML = "";
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
      .on("autoplay:timerstopped", stopProgress);

    return () => {
      emblaApi
        .off("autoplay:timerset", startProgress)
        .off("autoplay:timerstopped", stopProgress);
    };
  };

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
  renderNavigationControls() {
    return html`
      <${this.buttonTag} 
        arialabel="Previous slide" 
        class="scroll-prev"
        iconOnly rounded 
        variant="secondary" 
        @click=${() => this.embla.scrollPrev()}>
        ${this.generateIconHtml(chevronLeft.svg)}
      </${this.buttonTag}>
      <${this.buttonTag} 
        arialabel="Next slide" 
        class="scroll-next"
        iconOnly rounded 
        variant="secondary" 
        @click=${() => this.embla.scrollNext()}>
        ${this.generateIconHtml(chevronRight.svg)}
      </${this.buttonTag}>`;
  }

  /** @private */
  renderPlayButton() {
    return html`
    <${this.buttonTag} 
      arialabel="${this.playBtnLabel}"
      class="play-pause"
      iconOnly 
      rounded 
      >
        <${this.iconTag} 
          onDark category="interface" 
          name="play-filled" 
          ?hidden=${this.isPlaying} 
          slot="icon">
        </${this.iconTag}>
        <${this.iconTag} 
          onDark category="interface" 
          name="pause" 
          ?hidden=${!this.isPlaying} 
          slot="icon">
        </${this.iconTag}>
    </${this.buttonTag}>
    `;
  }

  /**
   * Generates the HTML for the pagination controls.
   * @private
   * @returns {Element} The HTML element containing the pagination controls.
   */
  renderPaginationDots() {
    return html` <div class="embla__dots"></div> `;
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
        <div class="pagination-container">
          ${
            this.autoplay || this.autoScroll ? this.renderPlayButton() : nothing
          }
          ${this.pagination ? this.renderPaginationDots() : nothing}
        </div>
      </div>
    `;
  }
}
