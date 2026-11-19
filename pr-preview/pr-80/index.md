<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that displays a sequence of slides. Slides can advance on their own or be controlled by the user.

The `<auro-slideshow>` element is a wrapper. Slides are slotted content and must be direct children of the element. Slides fill the width of the slideshow by default. To show more than one slide at a time, set a `max-width` on each slide.

No features are on by default. Turn on a feature by adding its attribute to the element.

**Note:** If all the slides fit on the screen at once, the slideshow doesn't activate.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-slideshow>` when you need to:

* Show a series of images or content in a space-saving way
* Advance slides automatically or scroll them continuously
* Show which slide is current
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Autoplay

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
