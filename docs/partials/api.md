<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Autoplay

Set `autoplay` to add a play and pause button, so users can stop and start the slideshow.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoplay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoplay.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Autoscroll

Set `autoScroll` to add a play and pause button. Unlike `autoplay`, the slideshow doesn't stop on each slide. It scrolls at a steady pace and stops when someone hovers over the slides, moves keyboard focus to a slide, drags the slides, or uses a control.

`pagination` and `navigation` controls don't work unless the slideshow is stopped. 

`autoScroll` doesn't work on touch devices, where the primary pointer is coarse.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoscroll.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoscroll.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Delay

To change how long each slide shows, set `delay` on an `autoplay` slideshow to a number of milliseconds. The default is 7000, so each slide shows for 7 seconds.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/delay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/delay.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Full-bleed preview

Set `fullBleed` to show parts of the previous and next slides beside the current slide. The slideshow stretches to the full width of the browser window.

**Note:** To prevent horizontal scrolling, set `overflow-x: hidden` on a parent container. Don't set it on the `<body>` element, because that stops horizontal scrolling when fixed-width elements become wider than the page. The example sets it on `<body>` for demo purposes only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/full-bleed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/full-bleed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Loop

When `loop` is set, the slideshow goes back to the first slide after the last slide. When `loop` isn't set and `autoplay` or `autoScroll` is set, the slideshow stops on the last slide.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/loop.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/loop.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Navigation

Set `navigation` to add previous and next arrow buttons that let users move through the slides. The arrows appear only when the slides are hovered.

When `loop` isn't set, the arrow for a direction is hidden at the first or last slide.

The arrows don't appear on touch devices, where the primary pointer is coarse.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/navigation.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/navigation.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Pagination

Set `pagination` to show a dot for each slide. The current slide's dot is wider and filled, to match the progress bar.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pagination.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pagination.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Play on init

Set `playOnInit` to start playing when the page loads. It applies only when `autoplay` or `autoScroll` is set. Without it, the slideshow starts playing only when the user clicks the play button or the `play()` method is called.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/playoninit.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/playoninit.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Scroll speed

To change how fast an `autoScroll` slideshow moves, set `scrollSpeed` to a number of pixels per frame. The default is 0.75. Use a higher number to scroll faster. The number doesn't need to be whole.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scrollspeed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scrollspeed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Start delay

To change how long an `autoScroll` slideshow waits before it starts or resumes scrolling, set `startDelay` to a number of milliseconds. The default is 1000, which is 1 second.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/startdelay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/startdelay.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/slots_aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Full-bleed and autoscroll preview

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/full-bleed-autoscroll.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/full-bleed-autoscroll.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

