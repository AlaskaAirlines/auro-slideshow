// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, nothing } from "lit";
import { html } from "lit/static-html.js";

import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroButton } from "@aurodesignsystem/auro-button/src/auro-button.js";
import buttonVersion from "./buttonVersion.js";

import { AuroIcon } from "@aurodesignsystem/auro-icon/src/auro-icon.js";
import iconVersion from "./iconVersion.js";

import chevronLeft from "@alaskaairux/icons/dist/icons/interface/chevron-left.mjs";
import chevronRight from "@alaskaairux/icons/dist/icons/interface/chevron-right.mjs";

// TODO: These should be replaced with pause/play icons when created by design
import fakePlay from "@alaskaairux/icons/dist/icons/in-flight/entertainment-stroke.mjs";
import fakePause from "@alaskaairux/icons/dist/icons/in-flight/luggage-stroke.mjs";

import styleCss from "./style.scss";

export class AuroSlideshow extends LitElement {
  constructor() {
    super();

    this.autoplay = false;
    this.playOnInit = false;
    this.delay = 5000;

    this.autoScroll = false;

    this.loop = false;
    this.navigation = false;
    this.pagination = false;

    this.playBtnLabel = "Play slideshow";

    // private
    this.playIcon = fakePlay.svg;
    this.embla = null;
    this.slides = [];

    const versioning = new AuroDependencyVersioning();

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
       * If true, the slideshow will play automatically.
       */
      autoplay: {
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
    };
  }

  get _playBtn() {
    return this.shadowRoot.querySelector(".play-pause");
  }

  initializeEmbla() {
    const emblaNode = this.shadowRoot.querySelector(".embla");
    const options = { loop: this.loop };
    let plugins = null;

    const autoplayOptions = {
      playOnInit: false,
      delay: this.delay,
    };

    const autoscrollOptions = {};

    if (this.autoplay) {
      plugins = [Autoplay(autoplayOptions)];
    }
    if (this.autoScroll) {
      plugins = [Autoscroll(autoscrollOptions)];
    }

    // Attach slides to the Embla instance
    const emblaContainer = this.shadowRoot.querySelector(".embla__container");
    emblaContainer.replaceChildren(...this.slides);

    this.embla = EmblaCarousel(emblaNode, options, plugins);

    this.addPlayBtnListeners(this.embla, this._playBtn);

    if (this.playOnInit) {
      this.embla.plugins().autoplay.play();
    }
  }

  firstUpdated() {
    this.updateSlides();
    this.initializeEmbla();
    console.log(this.embla.plugins().autoplay.isPlaying());
    console.log("first updated", this.slides);
  }

  handleSlotChange() {
    // this.updateSlides();
    // this.initializeEmbla();
  }

  updateSlides() {
    const slot = this.shadowRoot.querySelector("slot:not([name])");
    slot.assignedElements().forEach((element) => {
      element.classList.add("embla__slide");
    });
    this.slides = slot.assignedElements();
  }

  addPlayBtnListeners = (emblaApi, playBtn) => {
    const togglePlayBtnState = (emblaApi) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      // Not sure why these are reversed. Embla is weird.
      this.playBtnLabel = autoplay.isPlaying()
        ? "Play Slideshow"
        : "Pause Slideshow";
      this.playIcon = autoplay.isPlaying() ? fakePlay.svg : fakePause.svg;
      this.requestUpdate();
    };

    const onPlayBtnClick = () => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
      playOrStop();
      console.log("Playing?", autoplay.isPlaying());
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
   * Toggles the play/pause state of the slideshow.
   * @returns {void}
   */
  togglePlay() {
    console.log("play clicked");
    const autoplay = this.embla?.plugins()?.autoplay;

    autoplay.isPlaying() ? autoplay.stop : autoplay.play;

    // this.togglePlayBtnState()

    // this.isPlaying = !this.isPlaying;
    // rerender elements
    // this.requestUpdate();
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

  renderPlayButton() {
    return html`
    <${this.buttonTag} 
      arialabel="${this.playBtnLabel}"
      class="play-pause"
      iconOnly 
      rounded 
      >
        ${this.generateIconHtml(this.playIcon)}
    </${this.buttonTag}>
    `;
  }

  /**
   * Generates the HTML for the pagination controls.
   * @private
   * @returns {Element} The HTML element containing the pagination controls.
   */
  renderPaginationDots() {
    return html`
      <div class="embla__dots">
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
        <div class="pagination-container">
          ${this.autoplay ? this.renderPlayButton() : nothing}
          ${this.pagination ? this.renderPaginationDots() : nothing}
        </div>
      </div>
    `;
  }
}
