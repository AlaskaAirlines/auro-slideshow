`<auro-slideshow>` is an [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying a sequence of slides, which can automatically advance through the content or be manually controlled by the user. 

The `<auro-slideshow>` component is a wrapper element. All slides are slotted content and must be direct children of the component. Slides must have assigned `width` and `height` properties to display properly.

`<auro-slideshow>` is a fully customizable component and does not come with any features turned on by default. The features of `<auro-slideshow>` are turned on by including the proper attributes on the element.

**Note:** If all the slides can fit on the page at once, the slideshow will not activate.
