import { fixture, html, expect } from '@open-wc/testing';
import '../index.js';

describe('auro-slideshow', () => {
  it('auro-slideshow is accessible', async () => {
    const el = await fixture(html`
      <auro-slideshow>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-slideshow custom element is defined', async () => {
    const el = await !!customElements.get("auro-slideshow");

    await expect(el).to.be.true;
  });

  it('has default attributes', async () => {
    const el = await fixture(html`
      <auro-slideshow>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    expect(el.getAttribute('slidesPerView')).to.equal("auto");
    expect(el.getAttribute('delay')).to.equal("3000");
    expect(el.getAttribute('autoplay')).to.equal(null);
    expect(el.getAttribute('loop')).to.equal(null);
    expect(el.getAttribute('pagination')).to.equal(null);
    expect(el.getAttribute('navigation')).to.equal(null);
  });

  it('is playing on page load when autoplay is on', async () => {
    const el = await fixture(html`
      <auro-slideshow autoplay>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    expect(el.isPlaying).to.equal(true);
  });

  it('is not playing on page load when autoplay is off', async () => {
    const el = await fixture(html`
      <auro-slideshow>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    expect(el.isPlaying).to.equal(false);
  });

  it('does not initialize swiper if there are no slides', async () => {
    const el = await fixture(html`
      <auro-slideshow>
      </auro-slideshow>
    `);

    expect(el.swiper).to.equal(undefined);
    expect(el.isPlaying).to.equal(false);
  });

  it('renders pagination controls when pagination is set to true', async () => {
    const el = await fixture(html`
      <auro-slideshow pagination>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    const pagination = el.shadowRoot.querySelector('.swiper-pagination');
    expect(pagination).to.exist;
  });

  it('renders navigation controls when navigation is set to true', async () => {
    const el = await fixture(html`
      <auro-slideshow navigation>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder Image 3" />
      </auro-slideshow>
    `);

    const prevButton = el.shadowRoot.querySelector('.scroll-prev');
    const nextButton = el.shadowRoot.querySelector('.scroll-next');
    expect(prevButton).to.exist;
    expect(nextButton).to.exist;
  });
});
