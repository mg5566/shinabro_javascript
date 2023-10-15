import "./index.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="text-3xl font-bold">Hello Kangaroo world!</h1>
    <p>I am Mike!</p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
