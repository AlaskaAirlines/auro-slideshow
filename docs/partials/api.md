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

## Property & Attribute Examples

### Autoplay

Setting the `autoplay` attribute will render the play button so users can stop or start the slideshow. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoplay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoplay.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### AutoScroll

Setting the `autoScroll` attribute will also render the play button, but unlike `autoplay`, the slideshow will not stop on each slide. Instead, it will scroll continuously at a set pace and only stop on hover/focus or if any controls are clicked. 

`pagination` and `navigation` controls will not work unless the slideshow is stopped. 

`autoScroll` is disabled on mobile devices. 

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

To set a custom slide duration on an `autoplay` slideshow, use the `delay` attribute to pass in a new value in milliseconds. The default value is 7000. This will show each slide for 7 seconds before moving to the next slide.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/delay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/delay.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Full-Bleed Preview

To enable the slideshow to show a preview of the previous and next slides, use the `fullBleed` attribute. This will unhide the overflow of the view area. 

**Note:** To use this properly, a parent container MUST have `overflow-x: hidden` to prevent horizontal scrolling on the page. It is not recommended to put `overflow-x: hidden` on the `<body>` element as this will prevent horizontal scrolling if fixed-width elements become wider than the page. This is only done for demo purposes.

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

If the `loop` attribute is on, the slideshow will go back to the first slide when it reaches the end. If `autoplay` or `autoScroll` is on and `loop` is off, the slideshow will stop on the last slide.

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

Setting the `navigation` attribute will render previous/next arrow controls to allow the user to manually navigate the slideshow. These controls will only appear when the slides are hovered.

If `loop` is off, the respective arrow control will be disabled/hidden when the slideshow is at the beginning or the end.

`navigation` controls are disabled on mobile devices.

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

Setting the `pagination` attribute will render pagination dots to indicate the number of slides. The current slide dot is represented by a filled wide dot to match the look of the progress bar. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pagination.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/pagination.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### PlayOnInit

Setting the `playOnInit` attribute will start playing the slideshow when the page loads if either `autoplay` or `autoScroll` are enabled. Otherwise, the slideshow will not start playing until the user clicks the play button or the `play()` method is called.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/playoninit.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/playoninit.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### ScrollSpeed

To set a custom speed on an `autoScroll` slideshow, use the `scrollSpeed` attribute to pass in a new value in pixels per frame. The default value is 0.75. To make the slideshow scroll faster, use a higher number. The value does not need to be whole number.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/scrollspeed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/scrollspeed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### StartDelay

To set a custom delay before the `autoScroll` restarts, use the `startDelay` attribute to pass in a new value in milliseconds. The default value is 1000. This will cause the slideshow to wait 1 second before it resumes autoscrolling. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/startdelay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/startdelay.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/slots_aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common Usage Patterns & Functional Examples

### Full-Bleed + AutoScroll Preview

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/full-bleed-autoscroll.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/full-bleed-autoscroll.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

