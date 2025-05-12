import { expect, fixture, html } from "@open-wc/testing";
import "../dist/registered.js";

describe("auro-slideshow", () => {
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
