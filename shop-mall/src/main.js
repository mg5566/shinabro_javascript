import { setupProducts } from "./products";
import { setupCart } from "./cart";
import { setupCounter } from "./counter";

async function main() {
  const { updateCount: updateProductCount, getProductById } =
    await setupProducts({
      container: document.querySelector("#products"),
      onDecrease,
      onIncrease,
    });

  const { increase, decrease, getTotalCount } = setupCounter();

  const {
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    updateCount: updateCartCount,
  } = setupCart({
    container: document.querySelector(".cart-items"),
    onDecrease,
    onIncrease,
  });

  const updateTotalCount = (totalCount) => {
    document.querySelector(".total-count").innerHTML = totalCount;
  };

  function onIncrease({ productId }) {
    const count = increase({ productId });
    updateProductCount({ productId, count });
    if (count === 1) {
      addProductToCart({ product: getProductById(productId) });
    }
    updateCartCount({ productId, count });
    updateTotalCount(getTotalCount());
  }
  function onDecrease({ productId }) {
    const count = decrease({ productId });
    updateProductCount({ productId, count });
    updateCartCount({ productId, count });

    if (count === 0) {
      removeProductFromCart({ product: getProductById(productId) });
    }
    updateTotalCount(getTotalCount());
  }

  document.querySelector(".btn-cart").addEventListener("click", () => {
    document.body.classList.add("displaying_cart");
  });

  document.querySelector(".btn-close-cart").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
  document.querySelector(".cart-dimmed-bg").addEventListener("click", () => {
    document.body.classList.remove("displaying_cart");
  });
}

main();
