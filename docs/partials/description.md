`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that displays a sequence of slides. Slides can advance on their own or be controlled by the user.

The `<auro-slideshow>` element is a wrapper. Slides are slotted content and must be direct children of the element. Slides fill the width of the slideshow by default. To show more than one slide at a time, set a `max-width` on each slide.

No features are on by default. Turn on a feature by adding its attribute to the element.

**Note:** If all the slides fit on the screen at once, the slideshow doesn't scroll or advance on its own.
