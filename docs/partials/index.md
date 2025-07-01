<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-slideshow use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Autoplay

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

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/autoscroll.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/autoscroll.html) -->
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
