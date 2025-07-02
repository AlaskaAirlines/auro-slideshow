import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered.js";
import { useAccessibleIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";
import sinon from "sinon";

useAccessibleIt();

const slides = html`
  <div style="width: 400px; display: flex; justify-content: center;">
    <p>Slide 1</p>
  </div>
  <div style="width: 400px; display: flex; justify-content: center;">
    <p>Slide 2</p>
  </div>
  <div style="width: 400px; display: flex; justify-content: center;">
    <p>Slide 3</p>
  </div>
`;

describe("auro-slideshow", () => {
  it("renders with default values", async () => {
    const el = await fixture(html`
      <auro-slideshow> ${slides} </auro-slideshow>
    `);

    const paginationContainer = el.shadowRoot.querySelector(
      ".pagination-container",
    );

    await expect(el).to.exist;
    await expect(el.autoplay).to.be.false;
    await expect(el.autoScroll).to.be.false;
    await expect(el.loop).to.be.false;
    await expect(el.playOnInit).to.be.false;
    await expect(el.navigation).to.be.false;
    await expect(el.pagination).to.be.false;
    await expect(el.delay).to.equal(7000);
    await expect(el.scrollSpeed).to.equal(0.75);
    await expect(el.startDelay).to.equal(1000);
    await expect(el.playBtnLabel).to.equal(el.playLabel);
    await expect(el.isPlaying).to.be.false;
    await expect(el.embla).to.not.be.null;
    await expect(el.slides).to.have.lengthOf(3);
    await expect(paginationContainer).to.not.exist;
    await expect(el._dotsNode).to.not.exist;
    await expect(el._progressNode).to.not.exist;
    await expect(el._playBtn).to.not.exist;
    await expect(el._prevBtn).to.not.exist;
    await expect(el._nextBtn).to.not.exist;
  });

  it("auro-slideshow custom element is defined", async () => {
    const el = await !!customElements.get("auro-slideshow");

    await expect(el).to.be.true;
  });

  it("renders with autoplay enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay> ${slides} </auro-slideshow>
    `);

    const shadowButton = el._playBtn.shadowRoot.querySelector("button");

    await expect(el.autoplay).to.be.true;
    await expect(el._playBtn).to.exist;
    await expect(el.embla.plugins().autoplay.options.delay).to.equal(7000);
    await expect(el.playBtnLabel).to.equal(el.playLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.playLabel,
    );
  });

  it("starts playing on init when autoplay and playOnInit are enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay playOnInit> ${slides} </auro-slideshow>
    `);

    const shadowButton = el._playBtn.shadowRoot.querySelector("button");

    await expect(el.autoplay).to.be.true;
    await expect(el.playOnInit).to.be.true;
    await expect(el.isPlaying).to.be.true;
    await expect(el.playBtnLabel).to.equal(el.pauseLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.pauseLabel,
    );
  });

  it("renders with autoScroll enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow autoScroll> ${slides} </auro-slideshow>
    `);

    const shadowButton = el._playBtn.shadowRoot.querySelector("button");

    await expect(el.autoScroll).to.be.true;
    await expect(el._playBtn).to.exist;
    await expect(el.playBtnLabel).to.equal(el.playLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.playLabel,
    );
  });

  it("starts playing on init when autoScroll and playOnInit are enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow autoScroll playOnInit> ${slides} </auro-slideshow>
    `);

    const shadowButton = el._playBtn.shadowRoot.querySelector("button");

    await expect(el.autoScroll).to.be.true;
    await expect(el.playOnInit).to.be.true;
    await expect(el.isPlaying).to.be.true;
    await expect(el.playBtnLabel).to.equal(el.pauseLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.pauseLabel,
    );
  });

  it("disables autoScroll when both autoplay and autoScroll are enabled", async () => {
    const consoleWarnSpy = sinon.spy(console, "warn");

    const el = await fixture(html`
      <auro-slideshow autoplay autoScroll> ${slides} </auro-slideshow>
    `);

    await expect(el.autoplay).to.be.true;
    await expect(el.autoScroll).to.be.false;
    await expect(
      consoleWarnSpy.calledWith(
        "Autoplay and AutoScroll are not meant to be used together. AutoScroll has been disabled.",
      ),
    ).to.be.true;

    consoleWarnSpy.restore();
  });

  it("renders with loop enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow loop> ${slides} </auro-slideshow>
    `);

    await expect(el.loop).to.be.true;
  });

  it("renders with navigation enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow navigation> ${slides} </auro-slideshow>
    `);

    await expect(el.navigation).to.be.true;
    await expect(el._prevBtn).to.exist;
    await expect(el._nextBtn).to.exist;
  });

  it("renders with pagination enabled", async () => {
    const el = await fixture(html`
      <auro-slideshow pagination> ${slides} </auro-slideshow>
    `);

    const paginationContainer = el.shadowRoot.querySelector(
      ".pagination-container",
    );

    await expect(el.pagination).to.be.true;
    await expect(paginationContainer).to.exist;
  });

  it("sets custom delay on embla instance with autoplay", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay delay="2000"> ${slides} </auro-slideshow>
    `);

    await expect(el.delay).to.equal(2000);
    await expect(el.embla.plugins().autoplay.options.delay).to.equal(2000);
  });

  it("sets custom options on embla instance with autoScroll", async () => {
    const el = await fixture(html`
      <auro-slideshow autoScroll scrollSpeed="2" startDelay="500"> ${slides} </auro-slideshow>
    `);

    await expect(el.scrollSpeed).to.equal(2);
    await expect(el.startDelay).to.equal(500);
    await expect(el.embla.plugins().autoScroll.options.speed).to.equal(2);
    await expect(el.embla.plugins().autoScroll.options.startDelay).to.equal(
      500,
    );
  });

  it("toggles play/pause state when play button is clicked", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay playOnInit> ${slides} </auro-slideshow>
    `);

    const shadowButton = el._playBtn.shadowRoot.querySelector("button");

    // Initially playing
    await expect(el.isPlaying).to.be.true;

    // Click to pause
    el._playBtn.click();
    await expect(el.isPlaying).to.be.false;
    await expect(el.playBtnLabel).to.equal(el.playLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.playLabel,
    );

    // Click to play again
    el._playBtn.click();
    await expect(el.isPlaying).to.be.true;
    await expect(el.playBtnLabel).to.equal(el.pauseLabel);
    await expect(shadowButton.getAttribute("aria-label")).to.equal(
      el.pauseLabel,
    );
  });

  it("toggles tabindex of active slide when slide changes", async () => {
    const el = await fixture(html`
      <auro-slideshow navigation> ${slides} </auro-slideshow>
    `);

    // Get the initial active slide
    let activeSlide = el.slides[el.embla.selectedScrollSnap()];
    await expect(activeSlide.getAttribute("tabindex")).to.equal("0");
    // all other slides should have tabindex -1
    el.slides.forEach((slide, index) => {
      if (index !== el.embla.selectedScrollSnap()) {
        expect(slide.getAttribute("tabindex")).to.equal("-1");
      }
    });

    // Click next button to change slide
    el._nextBtn.click();
    await el.updateComplete;
    // Get the new active slide
    activeSlide = el.slides[el.embla.selectedScrollSnap()];
    await expect(activeSlide.getAttribute("tabindex")).to.equal("0");
    // all other slides should have tabindex -1
    el.slides.forEach((slide, index) => {
      if (index !== el.embla.selectedScrollSnap()) {
        expect(slide.getAttribute("tabindex")).to.equal("-1");
      }
    });

    // Go to the next slide on right arrow key press
    activeSlide.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight" }),
    );
    await el.updateComplete;
    activeSlide = el.slides[el.embla.selectedScrollSnap()];
    await expect(activeSlide.getAttribute("tabindex")).to.equal("0");
    // all other slides should have tabindex -1
    el.slides.forEach((slide, index) => {
      if (index !== el.embla.selectedScrollSnap()) {
        expect(slide.getAttribute("tabindex")).to.equal("-1");
      }
    });

    // Click previous button to change slide
    el._prevBtn.click();
    await el.updateComplete;
    // Get the new active slide
    activeSlide = el.slides[el.embla.selectedScrollSnap()];
    await expect(activeSlide.getAttribute("tabindex")).to.equal("0");
    // all other slides should have tabindex -1
    el.slides.forEach((slide, index) => {
      if (index !== el.embla.selectedScrollSnap()) {
        expect(slide.getAttribute("tabindex")).to.equal("-1");
      }
    });

    // Go to the previous slide on left arrow key press
    activeSlide.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowLeft" }),
    );
    await el.updateComplete;
    activeSlide = el.slides[el.embla.selectedScrollSnap()];
    await expect(activeSlide.getAttribute("tabindex")).to.equal("0");
    // all other slides should have tabindex -1
    el.slides.forEach((slide, index) => {
      if (index !== el.embla.selectedScrollSnap()) {
        expect(slide.getAttribute("tabindex")).to.equal("-1");
      }
    });
  });

  it("calls the correct play and stop methods when autoplay is on", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay> ${slides} </auro-slideshow>
    `);
    const playSpy = sinon.spy(el.embla.plugins().autoplay, "play");
    const stopSpy = sinon.spy(el.embla.plugins().autoplay, "stop");

    el.play();
    await expect(playSpy.calledOnce).to.be.true;
    await expect(el.isPlaying).to.be.true;

    el.stop();
    await expect(stopSpy.calledOnce).to.be.true;
    await expect(el.isPlaying).to.be.false;
  });

  it("calls the correct play and stop methods when autoScroll is on", async () => {
    const el = await fixture(html`
      <auro-slideshow autoScroll> ${slides} </auro-slideshow>
    `);
    const playSpy = sinon.spy(el.embla.plugins().autoScroll, "play");
    const stopSpy = sinon.spy(el.embla.plugins().autoScroll, "stop");

    el.play();
    await expect(playSpy.calledOnce).to.be.true;
    await expect(el.isPlaying).to.be.true;

    el.stop();
    await expect(stopSpy.calledOnce).to.be.true;
    await expect(el.isPlaying).to.be.false;
  });

  it("stops autoplay when user clicks on nav buttons or pagination dots", async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay navigation pagination playOnInit> ${slides} </auro-slideshow>
    `);

    await expect(el.isPlaying).to.be.true;

    el._nextBtn.click();
    await expect(el.isPlaying).to.be.false;

    el.play();
    el._prevBtn.click();
    await expect(el.isPlaying).to.be.false;

    el.play();
    el._dotsNode.querySelectorAll(".embla__dot")[1].click();
    await expect(el.isPlaying).to.be.false;
  });
});
