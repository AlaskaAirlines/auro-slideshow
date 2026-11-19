<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

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
<pre class="language-html"><code class="language-html">&lt;auro-slideshow navigation pagination&gt;
  &lt;div style="height: 480px"&gt;Slide 1&lt;/div&gt;
  &lt;div style="height: 480px"&gt;Slide 2&lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>

### Properties and attributes

| Properties  | Attributes  | Modifiers | Type    | Default           | Relevant when | Description                                                                                                                                                                                                                                                                                                     |
| ----------- | ----------- | --------- | ------- | ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoplay    | autoplay    |           | boolean |                   |               | Adds a play and pause button and moves to the next slide after each `delay`. The slideshow starts playing on page load only when `playOnInit` is also set.                                                                                                                                                      |
| autoScroll  | autoscroll  |           | boolean |                   |               | Scrolls the slides at a steady pace instead of stopping on each slide, and adds a play and pause button. The slideshow starts scrolling on page load only when `playOnInit` is also set. Doesn't apply on touch devices (those with a coarse primary pointer), and `autoplay` takes priority when both are set. |
| delay       | delay       |           | number  | `7000`            | `autoplay`    | Sets how long each slide shows before the slideshow moves to the next one, in milliseconds. Applies only when `autoplay` is set.                                                                                                                                                                                |
| fullBleed   | fullbleed   |           | boolean |                   |               | Stretches the slideshow to the full width of the browser window, so parts of the previous and next slides show beside the current slide. Each slide stays as wide as the slideshow's container. To prevent horizontal scrolling, set `overflow-x: hidden` on a parent container.                                |
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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;    
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Autoplay

Set `autoplay` to add a play and pause button, so users can stop and start the slideshow.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow autoplay playOnInit loop&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Autoscroll

Set `autoScroll` to add a play and pause button. Unlike `autoplay`, the slideshow doesn't stop on each slide. It scrolls at a steady pace and stops when someone hovers over the slides, moves keyboard focus to a slide, drags the slides, or uses a control.

`pagination` and `navigation` controls don't work unless the slideshow is stopped. 

`autoScroll` doesn't work on touch devices, where the primary pointer is coarse.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow navigation autoScroll playOnInit loop&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt; 
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Delay

To change how long each slide shows, set `delay` on an `autoplay` slideshow to a number of milliseconds. The default is 7000, so each slide shows for 7 seconds.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow autoplay delay="2000"&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Full-bleed preview

Set `fullBleed` to show parts of the previous and next slides beside the current slide. The slideshow stretches to the full width of the browser window.

**Note:** To prevent horizontal scrolling, set `overflow-x: hidden` on a parent container. Don't set it on the `<body>` element, because that stops horizontal scrolling when fixed-width elements become wider than the page. The example sets it on `<body>` for demo purposes only.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow fullBleed autoplay navigation loop&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;
&lt;!-- For demo purposes only --&gt;
&lt;style&gt;
  body {
    overflow-x: hidden;
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Loop

When `loop` is set, the slideshow goes back to the first slide after the last slide. When `loop` isn't set and `autoplay` or `autoScroll` is set, the slideshow stops on the last slide.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow pagination navigation loop&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Navigation

Set `navigation` to add previous and next arrow buttons that let users move through the slides. The arrows appear only when the slides are hovered.

When `loop` isn't set, the arrow for a direction is hidden at the first or last slide.

The arrows don't appear on touch devices, where the primary pointer is coarse.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow navigation&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Pagination

Set `pagination` to show a dot for each slide. The current slide's dot is wider and filled, to match the progress bar.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow pagination&gt;
&lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
&lt;/div&gt;
&lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
&lt;/div&gt;
&lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
&lt;/div&gt;
&lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
&lt;/div&gt;
&lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
&lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Play on init

Set `playOnInit` to start playing when the page loads. It applies only when `autoplay` or `autoScroll` is set. Without it, the slideshow starts playing only when the user clicks the play button or the `play()` method is called.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow autoScroll playOnInit loop&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt; 
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Scroll speed

To change how fast an `autoScroll` slideshow moves, set `scrollSpeed` to a number of pixels per frame. The default is 0.75. Use a higher number to scroll faster. The number doesn't need to be whole.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow navigation autoScroll scrollSpeed="2.88" loop&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt; 
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Start delay

To change how long an `autoScroll` slideshow waits before it starts or resumes scrolling, set `startDelay` to a number of milliseconds. The default is 1000, which is 1 second.

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow navigation autoScroll startDelay="200" loop&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt; 
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Slots for aria labels

To change the text screen readers announce for the slideshow controls, use these slots:
- `ariaLabel.scroll.left`: Previous slide button
- `ariaLabel.scroll.right`: Next slide button
- `ariaLabel.slideshow.play`: Play slideshow button
- `ariaLabel.slideshow.pause`: Pause slideshow button

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/slots_aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/slots_aria-label.html -->
<auro-slideshow autoplay navigation>
<span slot="ariaLabel.scroll.left">Show previous slide</span>
<span slot="ariaLabel.scroll.right">Show next slide</span>
<span slot="ariaLabel.slideshow.play">Play the slideshow</span>
<span slot="ariaLabel.slideshow.pause">Pause the slideshow</span>
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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow autoplay navigation&gt;
  &lt;span slot="ariaLabel.scroll.left"&gt;Show previous slide&lt;/span&gt;
  &lt;span slot="ariaLabel.scroll.right"&gt;Show next slide&lt;/span&gt;
  &lt;span slot="ariaLabel.slideshow.play"&gt;Play the slideshow&lt;/span&gt;
  &lt;span slot="ariaLabel.slideshow.pause"&gt;Pause the slideshow&lt;/span&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/1000/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt;
&lt;/auro-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Full-bleed and autoscroll preview

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

<pre class="language-html"><code class="language-html">&lt;auro-slideshow fullBleed navigation autoScroll playOnInit loop&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=1" alt="Random image 1"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=2" alt="Random image 2"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=3" alt="Random image 3"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=4" alt="Random image 4"&gt;
  &lt;/div&gt;
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=5" alt="Random image 5"&gt;
  &lt;/div&gt; 
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=6" alt="Random image 6"&gt;
  &lt;/div&gt; 
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=7" alt="Random image 7"&gt;
  &lt;/div&gt; 
  &lt;div style="height: 480px; max-width: 400px;"&gt;
    &lt;img style="object-fit: cover;" src="https://picsum.photos/400/480?random=8" alt="Random image 8"&gt;
  &lt;/div&gt; 
&lt;/auro-slideshow&gt;
&lt;!-- For demo purposes only --&gt;
&lt;style&gt;
  body {
    overflow-x: hidden;
  }
&lt;/style&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
