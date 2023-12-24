import { start } from "./router";
import { routes, getInitialHTML } from "./routes";

// const renderBackground = () => {
//   // set background color balck close to silver
//   document.body.style.backgroundColor = "#222222";
//   // set font color white
//   document.body.style.color = "#ffffff";
// };

// renderBackground();

export { getInitialHTML };

// server side rendering 에서는 동작하지 않는다.
if (typeof window !== "undefined") {
  console.log("starting the client side routing");
  start({
    routes,
  });
}
