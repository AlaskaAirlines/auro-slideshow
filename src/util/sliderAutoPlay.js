/* eslint-disable no-underscore-dangle */

const FPS = 30;

export default class SliderAutoPlay {
  constructor(swiper, config) {
    this._swiper = swiper;

    this._running = true;
    this._paused = false;
    this._pausedByInteraction = false;
    this._config = config;
    if (config.pauseOnMouseEnter) {
      this.onPointerEnter = this.onPointerEnter.bind(this);
      this.onPointerLeave = this.onPointerLeave.bind(this);

      swiper.el.addEventListener('pointerenter', this.onPointerEnter);
      swiper.el.addEventListener('pointerleave', this.onPointerLeave);
    }

    this._translateInterval = {
      id: 0,
      tick: 0,
      transition: 0,
    };

    this.startTranslation();
  }

  get running() {
    return this._running;
  }

  get paused() {
    return this._paused || this._pausedByInteraction;
  }

  pause() {
    if (!this._running || this._pausedByInteraction) {
      return;
    }
    this._paused = true;
    this._swiper.emit('autoplayPause');
  }

  resume() {
    this._paused = !this._running;
    this._swiper.emit('autoplayResume');
  }

  stop() {
    this._running = false;
    this._paused = false;
    this.stopTranslattion();
    this._swiper.emit('autoplayStop');
  }

  start() {
    this._running = true;
    this._paused = false;
    this._swiper.slideNext();
    this._swiper.emit('autoplayStart');
  }

  /**
   * @private
   */
  onPointerEnter() {
    this._pausedByInteraction = true;
    this.pause();
    this._swiper.emit('autoplayPause');
  };

  /**
   * @private
   */
  onPointerLeave() {
    this.resume();
    this._pausedByInteraction = false;
  };

  startTranslation() {
    const snapGrid = this._swiper.snapGrid;
    const nextIndex = (this._swiper.activeIndex + 1) % snapGrid.length;
    const translateEnd = -snapGrid[nextIndex];

    this._translateInterval = {
      tick: 0,
      translateStart: this._swiper.getTranslate(),
      translateEnd,
    };
    this._translateInterval.translateBy = translateEnd - this._translateInterval.translateStart;

    this._translateInterval.id = setInterval(() => {
      if (this.running && !this.paused) {
        this.translateWrapper();
      }
    }, 1000 / FPS);
  }

  /**
   * @private
   */
  translateWrapper() {
    const unit = this._translateInterval.translateBy / this._config.delay * (1000 / FPS);
    const amount = Number.parseInt(unit * this._translateInterval.tick) + this._translateInterval.translateStart;
    this._swiper.setTranslate(amount, (1000 / FPS));
    this._translateInterval.tick++;

    console.log(unit * this._translateInterval.tick);
    if (this._translateInterval.tick >= this._config.delay / (1000 / FPS)) {
      const snapGrid = this._swiper.snapGrid;
      const slideIndex = snapGrid.indexOf(-this._translateInterval.translateEnd);
      console.log(slideIndex);
      this.stopTranslattion();
      // this._swiper.slideTo(slideIndex, 1);
      setTimeout(() => {
        this._swiper.updateActiveIndex();
        this.startTranslation();
      }, 0);
      return;
    }
  }

  stopTranslattion() {
    if (this._translateInterval && this._translateInterval.id) {
      clearInterval(this._translateInterval.id);
      this._translateInterval = {};
    }
  }
}
