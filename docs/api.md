# auro-slideshow

A slideshow for presenting a series of images or other content in a space-saving way, with manual controls or automatic advancing.

**Key capabilities**
- **Autoplay**: Set `autoplay` to move to the next slide after each `delay`.
- **Continuous scroll**: Set `autoScroll` to scroll the slides at a steady pace.
- **Navigation arrows**: Set `navigation` to show previous and next arrows when the slides are hovered.
- **Pagination dots**: Set `pagination` to show a dot for each slide.
- **Looping**: Set `loop` to return to the first slide after the last.
- **Full-bleed preview**: Set `fullBleed` to show parts of the previous and next slides.

**Example**
```html
<auro-slideshow navigation pagination>
  <div style="height: 480px">Slide 1</div>
  <div style="height: 480px">Slide 2</div>
</auro-slideshow>
```

### Properties and attributes

| Properties  | Attributes  | Modifiers | Type    | Default           | Relevant when | Description                                                                                                                                                                                                                                                                                                     |
| ----------- | ----------- | --------- | ------- | ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoplay    | autoplay    |           | boolean |                   |               | Adds a play and pause button and moves to the next slide after each `delay`. The slideshow starts playing on page load only when `playOnInit` is also set.                                                                                                                                                      |
| autoScroll  | autoscroll  |           | boolean |                   |               | Scrolls the slides at a steady pace instead of stopping on each slide, and adds a play and pause button. The slideshow starts scrolling on page load only when `playOnInit` is also set. Doesn't apply on touch devices (those with a coarse primary pointer), and `autoplay` takes priority when both are set. |
| delay       | delay       |           | number  | `7000`            | `autoplay`    | Sets how long each slide shows before the slideshow moves to the next one, in milliseconds. Applies only when `autoplay` is set.                                                                                                                                                                                |
| fullBleed   | fullbleed   |           | boolean |                   |               | Stretches the slideshow to the full width of the browser window, so parts of the previous and next slides show beside the current slide. Each slide stays as wide as the slideshow's container.                                                                                                                 |
| loop        | loop        |           | boolean |                   |               | Goes back to the first slide after the last slide instead of stopping at the end. When `loop` isn't set, `autoplay` and `autoScroll` stop on the last slide.                                                                                                                                                    |
| navigation  | navigation  |           | boolean |                   |               | Shows previous and next arrow buttons when the slides are hovered. When `loop` isn't set, the arrow for a direction is hidden at the first or last slide. The arrows don't appear on touch devices, where the primary pointer is coarse.                                                                        |
| pagination  | pagination  |           | boolean |                   |               | Shows a dot for each slide, with a wider dot for the current slide. When `autoplay` is set, the current dot also shows a progress bar.                                                                                                                                                                          |
| playOnInit  | playoninit  |           | boolean |                   |               | Starts playback when the slideshow loads. Applies only when `autoplay` or `autoScroll` is set.                                                                                                                                                                                                                  |
| scrollSpeed | scrollspeed |           | number  | `0.75`            | `autoScroll`  | Sets how fast the slides scroll, in pixels per frame. Use a higher number to scroll faster. Applies only when `autoScroll` is set.                                                                                                                                                                              |
| startDelay  | startdelay  |           | number  | `1000`            | `autoScroll`  | Sets how long the slideshow waits before it starts or resumes scrolling, in milliseconds. Applies only when `autoScroll` is set.                                                                                                                                                                                |
| pauseLabel  | pauselabel  |           | string  | `Pause slideshow` |               | Deprecated: Use `ariaLabel.slideshow.pause` instead.<br>Sets the text screen readers announce for the pause button. Used only when the `ariaLabel.slideshow.pause` slot is empty.                                                                                                                               |
| playLabel   | playlabel   |           | string  | `Play slideshow`  |               | Deprecated: Use `ariaLabel.slideshow.play` instead.<br>Sets the text screen readers announce for the play button. Used only when the `ariaLabel.slideshow.play` slot is empty.                                                                                                                                  |

### Methods

| Name       | Parameters                                                           | Return | Description                                                                       |
| ---------- | -------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| play       | None                                                                 |        | Starts automatic playback. Does nothing unless `autoplay` or `autoScroll` is set. |
| register   | `name` (string) - The name of the element that you want to register. |        | Registers the custom element with the browser.                                    |
| scrollNext | None                                                                 |        | Scrolls to the next slide.                                                        |
| scrollPrev | None                                                                 |        | Scrolls to the previous slide.                                                    |
| stop       | None                                                                 |        | Stops automatic playback. Does nothing unless `autoplay` or `autoScroll` is set.  |

### Slots

| Name                      | Relevant when | Description                                                                                           |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| (default)                 |               | The slides. Each direct child element becomes one slide.                                              |
| ariaLabel.scroll.left     | `navigation`  | Text screen readers announce for the previous slide button. Defaults to "Previous slide".             |
| ariaLabel.scroll.right    | `navigation`  | Text screen readers announce for the next slide button. Defaults to "Next slide".                     |
| ariaLabel.slideshow.pause |               | Text screen readers announce for the button that pauses the slideshow. Defaults to "Pause slideshow". |
| ariaLabel.slideshow.play  |               | Text screen readers announce for the button that starts the slideshow. Defaults to "Play slideshow".  |

### CSS shadow parts

| Name              | Relevant when | Description                                                                                                                                      |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| next-button       | `navigation`  | The button that goes to the next slide, shown when `navigation` is set, except on touch devices.                                                 |
| play-pause-button |               | The button that plays and pauses the slideshow, shown when `autoplay` is set, or when `autoScroll` is set on a device that isn't a touch device. |
| prev-button       | `navigation`  | The button that goes to the previous slide, shown when `navigation` is set, except on touch devices.                                             |