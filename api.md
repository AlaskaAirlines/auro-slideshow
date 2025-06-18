<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-slideshow

## Properties

| Property      | Attribute     | Type      | Default           | Description                                      |
|---------------|---------------|-----------|-------------------|--------------------------------------------------|
| [autoScroll](#autoScroll)  | `autoScroll`  | `boolean` | false             | If true, the slideshow will scroll continuously. |
| [autoplay](#autoplay)    | `autoplay`    | `boolean` | false             | If true, the slideshow will play automatically.  |
| [delay](#delay)       | `delay`       | `number`  | 7000              | Slide duration in milliseconds.                  |
| [loop](#loop)        | `loop`        | `boolean` | false             | If true, the slideshow will loop back to the first slide after reaching the last slide. |
| [navigation](#navigation)  | `navigation`  | `boolean` | false             | If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered. |
| [pagination](#pagination)  | `pagination`  | `boolean` | false             | If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar. |
| [pauseLabel](#pauseLabel)  | `pauseLabel`  | `string`  | "Pause slideshow" | The aria-label for the pause button.             |
| [playLabel](#playLabel)   | `playLabel`   | `string`  | "Play slideshow"  | The aria-label for the play button.              |
| [playOnInit](#playOnInit)  | `playOnInit`  | `boolean` | false             | If true, the slideshow will start playing automatically on page load. |
| [scrollSpeed](#scrollSpeed) | `scrollSpeed` | `number`  | 1                 | Number of pixels auto scroll should advance per frame. |
| [startDelay](#startDelay)  | `startDelay`  | `number`  | 1000              | Delay in milliseconds before the auto scroll starts. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
    <auro-slideshow pagination autoplay playOnInit loop>
      <div style="height: 480px">
        <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1">
      </div>
      <div style="height: 480px">
        <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2">
      </div>
      <div style="height: 480px">
        <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3">
      </div>
      <div style="height: 480px">
        <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4">
      </div>
      <div style="height: 480px">
        <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5">
      </div>    
    </auro-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
  <auro-slideshow pagination autoplay playOnInit loop>
    <div style="height: 480px">
      <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1">
    </div>
    <div style="height: 480px">
      <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2">
    </div>
    <div style="height: 480px">
      <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3">
    </div>
    <div style="height: 480px">
      <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4">
    </div>
    <div style="height: 480px">
      <img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5">
    </div>    
  </auro-slideshow>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
