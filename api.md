<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

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
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

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

## Property & Attribute Examples

### Autoplay

Setting the `autoplay` attribute will render the play button so users can stop or start the slideshow. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoplay.html) -->
  <!-- The below content is automatically added from ./../apiExamples/autoplay.html -->
    <auro-slideshow autoplay playOnInit loop>
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
  <auro-slideshow autoplay playOnInit loop>
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
    <auro-slideshow navigation autoScroll playOnInit loop>
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
  <auro-slideshow navigation autoScroll playOnInit loop>
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

### Delay

To set a custom slide duration on an `autoplay` slideshow, use the `delay` attribute to pass in a new value in milliseconds. The default value is 7000. This will show each slide for 7 seconds before moving to the next slide.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/delay.html) -->
  <!-- The below content is automatically added from ./../apiExamples/delay.html -->
    <auro-slideshow autoplay delay="2000">
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
  <auro-slideshow autoplay delay="2000">
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

### Full-Bleed Preview

To enable the slideshow to show a preview of the previous and next slides, use the `fullBleed` attribute. This will unhide the overflow of the view area. 

**Note:** To use this properly, a parent container MUST have `overflow-x: hidden` to prevent horizontal scrolling on the page. It is not recommended to put `overflow-x: hidden` on the `<body>` element as this will prevent horizontal scrolling if fixed-width elements become wider than the page. This is only done for demo purposes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/full-bleed.html) -->
  <!-- The below content is automatically added from ./../apiExamples/full-bleed.html -->
    <auro-slideshow fullBleed autoplay navigation loop>
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
    <!-- For demo purposes only -->
    <style>
      body {
        overflow-x: hidden;
      }
    </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/full-bleed.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/full-bleed.html -->

```html
  <auro-slideshow fullBleed autoplay navigation loop>
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
  <!-- For demo purposes only -->
  <style>
    body {
      overflow-x: hidden;
    }
  </style>
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

### PlayOnInit

Setting the `playOnInit` attribute will start playing the slideshow when the page loads if either `autoplay` or `autoScroll` are enabled. Otherwise, the slideshow will not start playing until the user clicks the play button or the `play()` method is called.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/playoninit.html) -->
  <!-- The below content is automatically added from ./../apiExamples/playoninit.html -->
    <auro-slideshow autoScroll playOnInit loop>
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
  <auro-slideshow autoScroll playOnInit loop>
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
    <auro-slideshow navigation autoScroll scrollSpeed="2.88" loop>
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
  <auro-slideshow navigation autoScroll scrollSpeed="2.88" loop>
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
  <auro-slideshow navigation autoScroll startDelay="200" loop>
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
<auro-slideshow navigation autoScroll startDelay="200" loop>
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

## Slot Examples

### Slots for Aria-Labels

To customize the aria-labels for the slideshow controls, use the following slots:
- `ariaLabel.scroll.left` - Previous slide button
- `ariaLabel.scroll.right` - Next slide button
- `ariaLabel.slideshow.play` - Play slideshow button
- `ariaLabel.slideshow.pause` - Pause slideshow button

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/slots_aria-label.html) -->
  <!-- The below content is automatically added from ./../apiExamples/slots_aria-label.html -->
  <auro-slideshow autoplay navigation>
    <span slot="ariaLabel.scroll.left">Custom label for previous slide</span>
    <span slot="ariaLabel.scroll.right">Custom label for next slide</span>
    <span slot="ariaLabel.slideshow.play">Custom label for play slideshow</span>
    <span slot="ariaLabel.slideshow.pause">Custom label for pause slideshow</span>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/slots_aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/slots_aria-label.html -->

```html
<auro-slideshow autoplay navigation>
  <span slot="ariaLabel.scroll.left">Custom label for previous slide</span>
  <span slot="ariaLabel.scroll.right">Custom label for next slide</span>
  <span slot="ariaLabel.slideshow.play">Custom label for play slideshow</span>
  <span slot="ariaLabel.slideshow.pause">Custom label for pause slideshow</span>
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

## Common Usage Patterns & Functional Examples

### Full-Bleed + AutoScroll Preview

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/full-bleed-autoscroll.html) -->
  <!-- The below content is automatically added from ./../apiExamples/full-bleed-autoscroll.html -->
    <auro-slideshow fullBleed navigation autoScroll playOnInit loop>
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
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=6" alt="Random image 6">
      </div> 
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=7" alt="Random image 7">
      </div> 
      <div style="height: 480px; max-width: 400px;">
        <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=8" alt="Random image 8">
      </div> 
    </auro-slideshow>
    <!-- For demo purposes only -->
    <style>
      body {
        overflow-x: hidden;
      }
    </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/full-bleed-autoscroll.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/full-bleed-autoscroll.html -->

```html
  <auro-slideshow fullBleed navigation autoScroll playOnInit loop>
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
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=6" alt="Random image 6">
    </div> 
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=7" alt="Random image 7">
    </div> 
    <div style="height: 480px; max-width: 400px;">
      <img style="object-fit: cover;" src="https://picsum.photos/400/480?random=8" alt="Random image 8">
    </div> 
  </auro-slideshow>
  <!-- For demo purposes only -->
  <style>
    body {
      overflow-x: hidden;
    }
  </style>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
