# auro-slideshow

## Properties

| Property             | Attribute            | Type      | Default        | Description                                      |
|----------------------|----------------------|-----------|----------------|--------------------------------------------------|
| `autoplay`           | `autoplay`           | `number`  | 7000           | The time in milliseconds between each slide change. Defaults to undefined. |
| `loop`               | `loop`               | `boolean` | false          | If true, the slideshow will loop back to the first slide after reaching the last slide. Defaults to false. |
| `pagination`         | `pagination`         | `boolean` | false          | If true, the slideshow will display pagination bullets for each slide. |
| `slidesPerView`      | `slidesPerView`      | `string`  | "auto"         | The number of slides per view. Defaults to 1.    |
| `spaceBetweenSlides` | `spaceBetweenSlides` | `number`  | 16             | The pixel distance between slides when multiple slides are in view. |
| `variant`            | `variant`            | `string`  | "'slidershow'" | 'slideshow': pagination indicators will be showing underneat with auto-play the progressbar<br />`slider`: prev/next button will show on hover and there will be no pagination indicator |

## Methods

| Method                    | Type       |
|---------------------------|------------|
| `handleHeaderSlotContent` | `(): void` |
| `initializeSwiper`        | `(): void` |
