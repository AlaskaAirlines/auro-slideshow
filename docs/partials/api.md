<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

This is the slideshow with no features turned on. It can only be navigated by dragging/swiping or with the keyboard by tabbing to the slide and using the left/right arrow keys.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
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

### Autoplay

Setting the `autoplay` attribute will render the play button so users can stop or start the slideshow. Adding the `pagination` attribute will render pagination dots with an animated progress bar in place of the current slide dot showing the time until the next slide. When stopped, the progress bar will be filled. Playing will stop if any of the controls are clicked or a slide is hovered/receives focus.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoplay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoplay.html) -->
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

### Custom labels for Play/Pause button

To set a custom aria-label for the play/pause button, pass in new values to the `playLabel` and `pauseLabel` attributes respectively. If not provided, they will default to "Play slideshow" and "Pause slideshow".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customlabels.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customlabels.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Full-Bleed Preview

To enable the slideshow to show a preview of the previous and next slides, use the `fullBleed` attribute. This will unhide the overflow of the view area. 

**Note:** To use this properly, a parent container MUST have `overflow-x: hidden` to prevent horizontal scrolling on the page. It is not recommended to put `overflow-x: hidden` on the `<body>` element as this will prevent horizontal scrolling if fixed-width elements become wider than the page. This is only done for demo purposes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullBleed.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullBleed.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Full-Bleed + AutoScroll Preview

 There must be enough slides to trigger looping. If all the slides can fit on the page `autoscroll` will not enable.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullBleedAutoScroll.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullBleedAutoScroll.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
