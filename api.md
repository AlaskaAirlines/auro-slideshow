<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-slideshow

## Properties

| Property      | Attribute     | Type      | Default           | Description                                      |
|---------------|---------------|-----------|-------------------|--------------------------------------------------|
| [autoScroll](#autoScroll)  | `autoScroll`  | `boolean` | false             | If true, the slideshow will scroll continuously. |
| [autoplay](#autoplay)    | `autoplay`    | `boolean` | false             | If true, the slideshow will play automatically.  |
| [delay](#delay)       | `delay`       | `number`  | 7000              | Slide duration in milliseconds. (Only used with `autoplay`) |
| [loop](#loop)        | `loop`        | `boolean` | false             | If true, the slideshow will loop back to the first slide after reaching the last slide. |
| [navigation](#navigation)  | `navigation`  | `boolean` | false             | If true, the slideshow will display navigation arrows for previous and next slides when the slide container is hovered. |
| [pagination](#pagination)  | `pagination`  | `boolean` | false             | If true, the slideshow will display pagination dots for each slide. If autoplay is on, the active dot will also show a progress bar. |
| [pauseLabel](#pauseLabel)  | `pauseLabel`  | `string`  | "Pause slideshow" | The aria-label for the pause button.             |
| [playLabel](#playLabel)   | `playLabel`   | `string`  | "Play slideshow"  | The aria-label for the play button.              |
| [playOnInit](#playOnInit)  | `playOnInit`  | `boolean` | false             | If true, the slideshow will start playing automatically on page load when `autoplay` or `autoScroll` are on. |
| [scrollSpeed](#scrollSpeed) | `scrollSpeed` | `number`  | 0.75              | Number of pixels auto scroll should advance per frame. (Only used with `autoScroll`) |
| [startDelay](#startDelay)  | `startDelay`  | `number`  | 1000              | Delay in milliseconds before the auto scroll starts. (Only used with `autoScroll`) |

## Methods

| Method       | Type       | Description                    |
|--------------|------------|--------------------------------|
| [play](#play)       | `(): void` | Starts the slideshow playback. |
| [scrollNext](#scrollNext) | `(): void` | Scrolls to the next slide.     |
| [scrollPrev](#scrollPrev) | `(): void` | Scrolls to the previous slide. |
| [stop](#stop)       | `(): void` | Stops the slideshow playback.  |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Default slot for the slides. Each child element will be treated as a slide. |

## CSS Shadow Parts

| Part                | Description                                 |
|---------------------|---------------------------------------------|
| `next-button`       | Use to style the next button control.       |
| `play-pause-button` | Use to style the play/pause button control. |
| `prev-button`       | Use to style the previous button control.   |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

This is the slideshow with no features turned on. It can only be navigated by dragging/swiping or with the keyboard by tabbing to the slide and using the left/right arrow keys.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
    <auro-slideshow>
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
  <auro-slideshow>
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

### Navigation

Setting the `navigation` attribute will render previous/next arrow controls to allow the user to manually navigate the slideshow. These controls will only appear when the slides are hovered.

If `loop` is off, the respective arrow control will be disabled/hidden when the slideshow is at the beginning or the end.

`navigation` controls are disabled on mobile devices.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/navigation.html) -->
  <!-- The below content is automatically added from ./../apiExamples/navigation.html -->
    <auro-slideshow navigation>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/navigation.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/navigation.html -->

```html
  <auro-slideshow navigation>
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

### Pagination

Setting the `pagination` attribute will render pagination dots to indicate the number of slides. The current slide dot is represented by a filled wide dot to match the look of the progress bar. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pagination.html) -->
  <!-- The below content is automatically added from ./../apiExamples/pagination.html -->
  <auro-slideshow pagination>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pagination.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/pagination.html -->

```html
<auro-slideshow pagination>
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

### Loop

If the `loop` attribute is on, the slideshow will go back to the first slide when it reaches the end. If `autoplay` or `autoScroll` is on and `loop` is off, the slideshow will stop on the last slide.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loop.html) -->
  <!-- The below content is automatically added from ./../apiExamples/loop.html -->
    <auro-slideshow pagination navigation loop>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loop.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/loop.html -->

```html
  <auro-slideshow pagination navigation loop>
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

### Autoplay

Setting the `autoplay` attribute will render the play button so users can stop or start the slideshow. Adding the `pagination` attribute will render pagination dots with an animated progress bar in place of the current slide dot showing the time until the next slide. When stopped, the progress bar will be filled. Playing will stop if any of the controls are clicked or a slide is hovered/receives focus.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoplay.html) -->
  <!-- The below content is automatically added from ./../apiExamples/autoplay.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoplay.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/autoplay.html -->

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

### Delay

To set a custom slide duration on an `autoplay` slideshow, use the `delay` attribute to pass in a new value in milliseconds. The default value is 7000. This will show each slide for 7 seconds before moving to the next slide.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/delay.html) -->
  <!-- The below content is automatically added from ./../apiExamples/delay.html -->
    <auro-slideshow pagination autoplay delay="2000">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/delay.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/delay.html -->

```html
  <auro-slideshow pagination autoplay delay="2000">
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

### AutoScroll

Setting the `autoScroll` attribute will also render the play button, but unlike `autoplay`, the slideshow will not stop on each slide. Instead, it will scroll continuously at a set pace and only stop on hover/focus or if any controls are clicked. 

`pagination` and `navigation` controls will not work unless the slideshow is stopped. 

`autoScroll` is disabled on mobile devices. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoscroll.html) -->
  <!-- The below content is automatically added from ./../apiExamples/autoscroll.html -->
    <auro-slideshow navigation autoscroll playOnInit loop>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
      </div> 
    </auro-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoscroll.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/autoscroll.html -->

```html
  <auro-slideshow navigation autoscroll playOnInit loop>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
    </div> 
  </auro-slideshow>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### ScrollSpeed

To set a custom speed on an `autoScroll` slideshow, use the `scrollSpeed` attribute to pass in a new value in pixels per frame. The default value is 0.75. To make the slideshow scroll faster, use a higher number. The value does not need to be whole number.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scrollspeed.html) -->
  <!-- The below content is automatically added from ./../apiExamples/scrollspeed.html -->
    <auro-slideshow navigation autoscroll scrollSpeed="2.88" loop>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
      </div> 
    </auro-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scrollspeed.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/scrollspeed.html -->

```html
  <auro-slideshow navigation autoscroll scrollSpeed="2.88" loop>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
    </div> 
  </auro-slideshow>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### StartDelay

To set a custom delay before the `autoScroll` restarts, use the `startDelay` attribute to pass in a new value in milliseconds. The default value is 1000. This will cause the slideshow to wait 1 second before it resumes autoscrolling. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/startdelay.html) -->
  <!-- The below content is automatically added from ./../apiExamples/startdelay.html -->
  <auro-slideshow navigation autoscroll startDelay="200" loop>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
    </div> 
  </auro-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/startdelay.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/startdelay.html -->

```html
<auro-slideshow navigation autoscroll startDelay="200" loop>
  <div style="height: 480px; max-width: 400px;">
    <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
  </div>
  <div style="height: 480px; max-width: 400px;">
    <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
  </div>
  <div style="height: 480px; max-width: 400px;">
    <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
  </div>
  <div style="height: 480px; max-width: 400px;">
    <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
  </div>
  <div style="height: 480px; max-width: 400px;">
    <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
  </div> 
</auro-slideshow>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### PlayOnInit

Setting the `playOnInit` attribute will start playing the slideshow when the page loads if either `autoplay` or `autoScroll` are enabled. Otherwise, the slideshow will not start playing until the user clicks the play button or the `play()` method is called.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/playoninit.html) -->
  <!-- The below content is automatically added from ./../apiExamples/playoninit.html -->
    <auro-slideshow autoscroll playOnInit loop>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
      </div>
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
      </div> 
    </auro-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/playoninit.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/playoninit.html -->

```html
  <auro-slideshow autoscroll playOnInit loop>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4">
    </div>
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5">
    </div> 
  </auro-slideshow>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom labels for Play/Pause button

To set a custom aria-label for the play/pause button, pass in new values to the `playLabel` and `pauseLabel` attributes respectively. If not provided, they will default to "Play slideshow" and "Pause slideshow".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customlabels.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customlabels.html -->
    <auro-slideshow pagination autoplay playLabel="Reproducir diapositivas" pauseLabel="Pausar diapositivas">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customlabels.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customlabels.html -->

```html
  <auro-slideshow pagination autoplay playLabel="Reproducir diapositivas" pauseLabel="Pausar diapositivas">
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
