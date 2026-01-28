# auro-slideshow

The `auro-slideshow` element is a customizable slideshow that displays a series of slides
with several options such as autoplay, navigation controls, and pagination dots.

### Properties & Attributes

| Properties  | Attributes  | Modifiers | Type    | Default | Description                                                                                                                                                                                         |
| ----------- | ----------- | --------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoplay    | autoplay    |           | boolean |         | If true, the slideshow will play automatically.                                                                                                                                                     |
| autoScroll  | autoScroll  |           | boolean |         | If true, the slideshow will scroll continuously.                                                                                                                                                    |
| delay       | delay       |           | number  | `7000`  | Slide duration in milliseconds (Only used with `autoplay`).                                                                                                                                         |
| fullBleed   | fullBleed   |           | boolean |         | If set, the slideshow will take up the width of its parent container showing previous and next slides. **Note:** a parent container must have `overflow-x: hidden` to prevent horizontal scrolling. |
| loop        | loop        |           | boolean |         | If true, the slideshow will loop back to the first slide after reaching the last slide.                                                                                                             |
| navigation  | navigation  |           | boolean |         | If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered.                                                                             |
| pagination  | pagination  |           | boolean |         | If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar.                                                                |
| pauseLabel  | pauseLabel  |           | string  |         | DEPRECATED - Use `ariaLabel.slideshow.pause` instead.                                                                                                                                               |
| playLabel   | playLabel   |           | string  |         | DEPRECATED - Use `ariaLabel.slideshow.play` instead.                                                                                                                                                |
| playOnInit  | playOnInit  |           | boolean |         | If true, the slideshow will start playing automatically on page load when `autoplay` or `autoScroll` are on.                                                                                        |
| scrollSpeed | scrollSpeed |           | number  | `0.75`  | Number of pixels auto scroll should advance per frame (Only used with `autoScroll`).                                                                                                                |
| startDelay  | startDelay  |           | number  | `1000`  | Delay in milliseconds before the auto scroll starts (Only used with `autoScroll`).                                                                                                                  |

### Methods

| Name       | Parameters                                                           | Return | Description                                    |
| ---------- | -------------------------------------------------------------------- | ------ | ---------------------------------------------- |
| play       | None                                                                 |        | Starts the slideshow playback.                 |
| register   | `name` (string) - The name of the element that you want to register. |        | Registers the custom element with the browser. |
| scrollNext | None                                                                 |        | Scrolls to the next slide.                     |
| scrollPrev | None                                                                 |        | Scrolls to the previous slide.                 |
| stop       | None                                                                 |        | Stops the slideshow playback.                  |

### Slots

| Name                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| (default)                 | Default slot for the slides. Each child element will be treated as a slide.                  |
| ariaLabel.scroll.left     | The aria-label for the button navigating to the previous slide. Default is "Previous slide". |
| ariaLabel.scroll.right    | The aria-label for the button navigating to the next slide. Default is "Next slide".         |
| ariaLabel.slideshow.pause | The aria-label for the button that pauses the slideshow. Default is "Pause slideshow".       |
| ariaLabel.slideshow.play  | The aria-label for the button that starts the slideshow. Default is "Play slideshow".        |

### CSS Shadow Parts

| Name              | Description                                 |
| ----------------- | ------------------------------------------- |
| next-button       | Use to style the next button control.       |
| play-pause-button | Use to style the play/pause button control. |
| prev-button       | Use to style the previous button control.   |