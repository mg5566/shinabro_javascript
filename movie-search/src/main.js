import { start } from "./router";
import { renderIndex } from "./pages";
import { renderSearch } from "./pages/search";
import { routes } from "./routes";

const renderBackground = () => {
  // set background color balck close to silver
  document.body.style.backgroundColor = "#222222";
  // set font color white
  document.body.style.color = "#ffffff";
};

renderBackground();

start({
  routes,
});