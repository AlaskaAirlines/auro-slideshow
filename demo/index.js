import { AuroSlideshow } from "../src/auro-slideshow";

AuroSlideshow.register();
AuroSlideshow.register("custom-slideshow");

// export function initExamples(initCount = 0) {
//   try {
//     initCustomExample();
//   } catch (err) {
//     if (initCount <= 20) {
//       // setTimeout handles issue where content is sometimes loaded after the functions get called
//       setTimeout(() => {
//         initExamples(initCount + 1);
//       }, 100);
//     }
//   }
// }
