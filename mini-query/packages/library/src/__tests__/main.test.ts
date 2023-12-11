import { describe, expect, it, vi } from "vitest";
import { $ as miniQuery } from "../main";

const $ = (selector: string, container: Element) => {
  if (!container) {
    throw new Error("container is required to test");
  }
  return miniQuery(selector, container);
};

describe("MiniQueyr", () => {
  it("does nothing", () => {
    expect(true).toBe(true);
  });

  describe("length()", () => {
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

  describe("click()", () => {
    it("attaches click event listener correctly", () => {
      const div = document.createElement("div");

      div.innerHTML = `
    <button class="btn" type="button">button1</button>
    <button class="btn" type="button">button2</button>
    <button class="btn" type="button">button3</button>
    <button class="btn" type="button">button4</button>
    `;
      const handler = vi.fn();
      $(".btn", div).click(handler);

      (div.querySelectorAll(".btn")[0] as HTMLElement).click();
      expect(handler).toBeCalledTimes(1);
    });
  });
});
