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
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Slideshow

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that displays a sequence of slides. Slides can advance on their own or be controlled by the user.

The `<auro-slideshow>` element is a wrapper. Slides are slotted content and must be direct children of the element. Slides fill the width of the slideshow by default. To show more than one slide at a time, set a `max-width` on each slide.

No features are on by default. Turn on a feature by adding its attribute to the element.

**Note:** If all the slides fit on the screen at once, the slideshow doesn't scroll or advance on its own.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->

### Properties usage

`autoplay` and `autoScroll` can't be used together. If you set both, the slideshow turns off `autoScroll` and logs a warning in the console.

Use `navigation`, `pagination`, or both, so users have a clear way to move through the slides manually.

### Mobile behavior

On touch devices, where the primary pointer is coarse, `autoScroll` and `navigation` are turned off. Users can swipe left or right to move through the slides.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `<auro-slideshow>` when you need to:

* Show a series of images or content in a space-saving way
* Advance slides automatically or scroll them continuously
* Show which slide is current
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-slideshow/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-slideshow/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-slideshow?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-slideshow)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-slideshow?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-slideshow</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-slideshow>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-slideshow";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-slideshow@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroSlideshow } from '@aurodesignsystem/auro-slideshow/class';
// Register with a custom name if desired
AuroSlideshow.register('custom-slideshow');</code></pre>

This registers a new custom element, `<custom-slideshow>`, that behaves like `<auro-slideshow>`. Both can be on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-slideshow navigation>
<div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
<p>Slide 1</p>
</div>
<div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
<p>Slide 2</p>
</div>
<div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;">
<p>Slide 3</p>
</div>
</custom-slideshow>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-slideshow navigation&gt;
  &lt;div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;"&gt;
    &lt;p&gt;Slide 1&lt;/p&gt;
  &lt;/div&gt;
  &lt;div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;"&gt;
    &lt;p&gt;Slide 2&lt;/p&gt;
  &lt;/div&gt;
  &lt;div style="max-width: 400px; border: 2px solid #000; display: flex; justify-content: center;"&gt;
    &lt;p&gt;Slide 3&lt;/p&gt;
  &lt;/div&gt;
&lt;/custom-slideshow&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
