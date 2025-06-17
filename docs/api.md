# auro-slideshow

## Properties

| Property      | Attribute     | Type      | Default           | Description                                      |
|---------------|---------------|-----------|-------------------|--------------------------------------------------|
| `autoScroll`  | `autoScroll`  | `boolean` | false             | If true, the slideshow will scroll continuously. |
| `autoplay`    | `autoplay`    | `boolean` | false             | If true, the slideshow will play automatically.  |
| `delay`       | `delay`       | `number`  | 7000              | Slide duration in milliseconds.                  |
| `loop`        | `loop`        | `boolean` | false             | If true, the slideshow will loop back to the first slide after reaching the last slide. |
| `navigation`  | `navigation`  | `boolean` | false             | If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered. |
| `pagination`  | `pagination`  | `boolean` | false             | If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar. |
| `pauseLabel`  | `pauseLabel`  | `string`  | "Pause slideshow" | The aria-label for the pause button.             |
| `playLabel`   | `playLabel`   | `string`  | "Play slideshow"  | The aria-label for the play button.              |
| `playOnInit`  | `playOnInit`  | `boolean` | false             | If true, the slideshow will start playing automatically on page load. |
| `scrollSpeed` | `scrollSpeed` | `number`  | 1                 | Number of pixels auto scroll should advance per frame. |
| `startDelay`  | `startDelay`  | `number`  | 1000              | Delay in milliseconds before the auto scroll starts. |
