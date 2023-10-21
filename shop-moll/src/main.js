import dummy from "../dummy.json?raw";

function getProductHTML(product, count = 0) {
  return `
    <div
      class="product" 
      data-product-id="${product.id}" 
    >
    <img src="${product.images[0]}" alt="Image of ${product.name}" /> 
    <p>${product.name}</p>
    <div class="flex items-center justify-between">
      <span>Price: ${product.regularPrice}</span>
      <div>
        <button type="button" class="btn-increase bg-green-200 hover:bg-green-400 py-1 px-3 rounded-full ">+</button>
        <span class="cart-count text-green-800">
          ${count}
        </span>
        <button type="button" class="btn-decrease bg-green-200 hover:bg-green-400 py-1 px-3 rounded-full ">-</button>
      </div>
    </div>
  </div>
  `;
}

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return JSON.parse(dummy);
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    return await response.json();
  }
}

function findElement(startingElement, selector) {
  let currentElement = startingElement;
  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}

function sumAllCounts(countMap) {
  return Object.values(countMap).reduce((total, current) => {
    total += current;
    return total;
  }, 0);
}

async function main() {
  const products = await getProducts();
  const countMap = {};
  const productMap = {};
  products.forEach((product) => {
    productMap[product.id] = product;
  });

  document.querySelector("#products").innerHTML = products
    .map((product) => getProductHTML(product))
    .join("");

  // querySelectorAll 을 사용하여 event 등록하기
  // querySelector('#products") 에서 event target 을 찾아서 event 등록하기
  document.querySelector("#products").addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");
    // const product = products.find((product) => product.id === productId);
    const product = productMap[productId];

    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (countMap[productId] === undefined) {
        countMap[productId] = 0;
      }
      if (targetElement.matches(".btn-decrease")) {
        if (countMap[productId] > 0) {
          countMap[productId] -= 1;
        }
      } else if (targetElement.matches(".btn-increase")) {
        countMap[productId] += 1;
      }

      const cartCount = productElement.querySelector(".cart-count");
      cartCount.innerHTML = countMap[productId];
      if (countMap[productId] === 0) {
        cartCount.innerHTML = 0;
      } else {
        const productIds = Object.keys(countMap);
        console.log("productIds", productIds);
        document.querySelector(".cart-items").innerHTML = productIds
          .map((productId) => {
            const productInCart = productMap[productId];
            return getProductHTML(productInCart, countMap[productId]);
          })
          .join("");
      }
    }

    const totalCount = sumAllCounts(countMap);
    document.querySelector(".total-count").innerHTML = `(${totalCount})`;
  });

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
