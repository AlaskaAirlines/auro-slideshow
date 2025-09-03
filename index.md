<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a sequence of slides, which can automatically advance through the content or be manually controlled by the user. 

The `<auro-slideshow>` component is a wrapper element. All slides are slotted content and must be direct children of the component. Slides must have assigned `width` and `height` properties to display properly.

`<auro-slideshow>` is a fully customizable component and does not come with any features turned on by default. The features of `<auro-slideshow>` are turned on by including the proper attributes on the element.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-slideshow use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-slideshow>` element should be used in situations where:

* A series of images or content needs to be displayed in a space-saving way
* Autoplaying or autoscrolling functionality is needed
* A current slide indicator is required
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./../docs/partials/readmeAddlInfo.md -->

###  Properties usage

`autoplay` and `autoScroll` are mutually exclusive properties and should not be used together on the same component instance. 

Both `navigation` and `pagination` can be used together, but at least one must be used to give users a clear way to control the slides manually.

### Mobile behavior

On mobile devices, `autoScroll` and `navigation` controls are automatically disabled. Users can navigate the slideshow by swiping left or right.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Autoplay

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

### AutoScroll

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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-slideshow` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-slideshow';
registerComponent('custom-slideshow');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-slideshow` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom.html -->
    <custom-slideshow navigation>
      <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
        <p>Slide 1</p>
      </div>
      <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
        <p>Slide 2</p>
      </div>
      <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
        <p>Slide 3</p>
      </div>
    </custom-slideshow>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

```html
 <custom-slideshow navigation>
    <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
      <p>Slide 1</p>
    </div>
    <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
      <p>Slide 2</p>
    </div>
    <div style="width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
      <p>Slide 3</p>
    </div>
  </custom-slideshow>
  ```

</auro-accordion>
