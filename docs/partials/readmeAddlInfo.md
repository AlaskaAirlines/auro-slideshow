### Properties usage

`autoplay` and `autoScroll` can't be used together. If you set both, the slideshow turns off `autoScroll` and logs a warning in the console.

Use `navigation`, `pagination`, or both, so users have a clear way to move through the slides manually.

Set `autoplay`, `autoScroll`, `playOnInit`, `delay`, `scrollSpeed`, `startDelay`, `loop`, `fullBleed`, `navigation`, and `pagination` before the slideshow loads, because changing them afterward doesn't fully take effect.

### Mobile behavior

On touch devices, where the primary pointer is coarse, `autoScroll` and `navigation` are turned off. Users can swipe left or right to move through the slides.
