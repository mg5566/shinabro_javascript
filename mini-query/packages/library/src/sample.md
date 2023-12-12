```js
import { $ } from "@mike.kangaroo.world/mini-query";

$(".btn").click((event) => {
  console.log("this is clicked", event.target);
});

console.log("number of buttons", $(".btn").length());
```
