import { describe, expect, it } from "vitest";
import { $ } from "../main";

describe("MiniQueyr", () => {
  it("does nothing", () => {
    expect(true).toBe(true);
  });

  it("returns length correstly", () => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="btn" type="button">button1</button>
    <button class="btn" type="button">button2</button>
    <button class="btn" type="button">button3</button>
    <button class="btn" type="button">button4</button>
    `;

    expect($(".btn", div).length()).toBe(4);
  });
});
