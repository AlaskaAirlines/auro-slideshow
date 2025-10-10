# auro-slideshow

## Properties

| Property      | Attribute     | Type      | Default           | Description                                      |
|---------------|---------------|-----------|-------------------|--------------------------------------------------|
| `autoScroll`  | `autoScroll`  | `boolean` | false             | If true, the slideshow will scroll continuously. |
| `autoplay`    | `autoplay`    | `boolean` | false             | If true, the slideshow will play automatically.  |
| `delay`       | `delay`       | `number`  | 7000              | Slide duration in milliseconds. (Only used with `autoplay`) |
| `fullBleed`   | `fullBleed`   | `boolean` | false             | If set, the slideshow will take up the width of its parent container showing previous and next slides. **Note:** a parent container must have `overflow-x: hidden` to prevent horizontal scrolling. |
| `loop`        | `loop`        | `boolean` | false             | If true, the slideshow will loop back to the first slide after reaching the last slide. |
| `navigation`  | `navigation`  | `boolean` | false             | If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered. |
| `pagination`  | `pagination`  | `boolean` | false             | If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar. |
| `pauseLabel`  | `pauseLabel`  | `string`  | "Pause slideshow" | DEPRECATED - Use `ariaLabel.slideshow.pause` instead. |
| `playLabel`   | `playLabel`   | `string`  | "Play slideshow"  | DEPRECATED - Use `ariaLabel.slideshow.play` instead. |
| `playOnInit`  | `playOnInit`  | `boolean` | false             | If true, the slideshow will start playing automatically on page load when `autoplay` or `autoScroll` are on. |
| `scrollSpeed` | `scrollSpeed` | `number`  | 0.75              | Number of pixels auto scroll should advance per frame. (Only used with `autoScroll`) |
| `startDelay`  | `startDelay`  | `number`  | 1000              | Delay in milliseconds before the auto scroll starts. (Only used with `autoScroll`) |

## Methods

| Method       | Type       | Description                    |
|--------------|------------|--------------------------------|
| `play`       | `(): void` | Starts the slideshow playback. |
| `scrollNext` | `(): void` | Scrolls to the next slide.     |
| `scrollPrev` | `(): void` | Scrolls to the previous slide. |
| `stop`       | `(): void` | Stops the slideshow playback.  |

## Slots

| Name                        | Description                                      |
|-----------------------------|--------------------------------------------------|
|                             | Default slot for the slides. Each child element will be treated as a slide. |
| `ariaLabel.slide.next`      | The aria-label for the button navigating to the next slide. Default is "Next slide". |
| `ariaLabel.slide.prev`      | The aria-label for the button navigating to the previous slide. Default is "Previous slide". |
| `ariaLabel.slideshow.pause` | The aria-label for the button that pauses the slideshow. Default is "Pause slideshow". |
| `ariaLabel.slideshow.play`  | The aria-label for the button that starts the slideshow. Default is "Play slideshow". |

## CSS Shadow Parts

| Part                | Description                                 |
|---------------------|---------------------------------------------|
| `next-button`       | Use to style the next button control.       |
| `play-pause-button` | Use to style the play/pause button control. |
| `prev-button`       | Use to style the previous button control.   |
