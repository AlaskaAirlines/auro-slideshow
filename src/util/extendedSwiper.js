/* eslint-disable max-params */
import Swiper from 'swiper';
import SliderAutoPlay from './sliderAutoPlay.js';

export default class ExtendedSwiper extends Swiper {
  constructor(el, options) {
    if (options.variant === 'slider' && options.autoplay) {
      const autoPlayConfig = options.autoplay;

      options.autoplay = false;
      super(el, options);

      /**
       * @private
       */
      this.variant = options.variant;

      this.slider = new SliderAutoPlay(this, autoPlayConfig);
    } else {
      super(el, options);
    }
  }

  get isPlaying() {
    if (this.slider) {
      return this.slider.running && !this.slider.paused;
    }
    return this.autoplay.running && !this.autoplay.paused;
  }

  translateTo(translate, speed, runCallbacks, transalateBounds, internal) {
    if (this.variant === 'slider' && !speed) {
      this.slider.startTranslation(translate);
    } else {
      super.translateTo(translate, speed, runCallbacks, transalateBounds, internal);
    }
  }
};
