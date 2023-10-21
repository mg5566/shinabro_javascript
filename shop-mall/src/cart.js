import { getProductElement } from "./products.js";
import { findElement } from "./utils.js";

export function setupCart({ container, onIncrease, onDecrease }) {
  container.addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        onDecrease({ productId });
      } else if (targetElement.matches(".btn-increase")) {
        onIncrease({ productId });
      }
    }
  });

  const addProduct = ({ product }) => {
    const productElement = getProductElement(product);
    container.appendChild(productElement);
  };

  const removeProduct = ({ product }) => {
    const productElement = container.querySelector(
      `.product[data-product-id='${product.id}']`
    );
    productElement.remove();
  };

  const updateCount = ({ productId, count }) => {
    const productElement = container.querySelector(
      `.product[data-product-id='${productId}']`
    );
    const cartCountElement = productElement.querySelector(".cart-count");
    cartCountElement.innerHTML = count;
    if (count === 0) {
      cartCountElement.innerHTML = "0";
    }
  };

  return {
    addProduct,
    removeProduct,
    updateCount,
  };
}
