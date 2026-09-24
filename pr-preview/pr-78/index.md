<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

#  Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a sequence of slides, which can automatically advance through the content or be manually controlled by the user. 

The `<auro-slideshow>` element is a wrapper element. All slides are slotted content and must be direct children of the element. Slides must have assigned `width` and `height` properties to display properly.

`<auro-slideshow>` is a fully customizable element and does not come with any features turned on by default. The features of `<auro-slideshow>` are turned on by including the proper attributes on the element.

**Note:** If all the slides can fit on the screen at once, the slideshow will not activate.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-slideshow>` element should be used in situations where:

* A series of images or content needs to be displayed in a space-saving way
* Autoplaying or autoscrolling functionality is needed
* A current slide indicator is required
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

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
