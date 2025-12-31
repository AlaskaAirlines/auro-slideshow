<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a sequence of slides, which can automatically advance through the content or be manually controlled by the user. 

The `<auro-slideshow>` element is a wrapper element. All slides are slotted content and must be direct children of the element. Slides must have assigned `width` and `height` properties to display properly.

`<auro-slideshow>` is a fully customizable element and does not come with any features turned on by default. The features of `<auro-slideshow>` are turned on by including the proper attributes on the element.

**Note:** If all the slides can fit on the screen at once, the slideshow will not activate.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->

###  Properties usage

`autoplay` and `autoScroll` are mutually exclusive properties and should not be used together on the same component instance. 

Both `navigation` and `pagination` can be used together, but at least one must be used to give users a clear way to control the slides manually.

### Mobile behavior

On mobile devices, `autoScroll` and `navigation` controls are automatically disabled. Users can navigate the slideshow by swiping left or right.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
The `<auro-slideshow>` element should be used in situations where:

* A series of images or content needs to be displayed in a space-saving way
* Autoplaying or autoscrolling functionality is needed
* A current slide indicator is required
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-slideshow/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-slideshow/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-slideshow?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-slideshow)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-slideshow?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-slideshow
```

<!-- AURO-GENERATED-CONTENT:END -->

### Define Dependency in Project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Defining the dependency within each project that is using the `<auro-slideshow>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-slideshow";
```

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Legacy browsers such as IE11 are no longer supported.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-slideshow@latest/+esm"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## Basic Example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom Component Registration for Version Management

There are two key parts to every Auro component: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

When you install the component as described on the `Install` page, the class is imported automatically, and the component is registered globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), you can manually register the class under a custom element name to avoid conflicts.

You can do this by importing only the component class and using the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

```js
// Import the class only
import { AuroSlideshow } from '@aurodesignsystem/auro-slideshow/class';

// Register with a custom name if desired
AuroSlideshow.register('custom-slideshow');
```

This will create a new custom element `<custom-slideshow>` that behaves exactly like `<auro-slideshow>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./apiExamples/custom.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

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
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
