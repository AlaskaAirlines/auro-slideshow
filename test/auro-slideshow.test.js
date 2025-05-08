import { expect, fixture, html } from "@open-wc/testing";
import "../index.js";

describe("auro-slideshow", () => {
  it.skip("sets the CSS class on auro-slideshow > div element", async () => {
    const el = await fixture(html`
      <auro-slideshow cssclass="testClass"></auro-slideshow>
    `);

    const div = el.shadowRoot.querySelector("div");
    expect(div.className).to.equal("testClass");
  });

  it("auro-slideshow is accessible", async () => {
    const el = await fixture(html`
      <auro-slideshow></auro-slideshow>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-slideshow custom element is defined", async () => {
    const el = await !!customElements.get("auro-slideshow");

    await expect(el).to.be.true;
  });
});
