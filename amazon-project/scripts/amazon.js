import { cart, addToCart } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";

loadProducts(renderProductsGrid);

function renderProductsGrid(){
  render();
  updateCartQuantity(".cart-quantity");

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {

      const {productId} = button.dataset;
      const productQuantity = document.querySelector(`.js-quantity-selector-${productId}`).value;

      addToCart(productId, productQuantity);
      updateCartQuantity();

      document.querySelector(`.js-added-to-cart-${productId}`).classList.add('added-true')
      setTimeout(()=>{document.querySelector(`.js-added-to-cart-${productId}`).classList.remove('added-true')}, 1500)    

    });
  });

}

function render() {
  let productList = "";
  products.forEach((product) => {
    productList += `
        <div class="product-container">
            <div class="product-image-container">
                <img
                    class="product-image"
                    src="${product.image}"
                />
            </div>

            <div class="product-name-container">
            ${product.name}
            </div>

            <div class="product-rating-container">
                <img
                    class="product-rating-stars"
                    src="${product.getStarsUrl()}"
                />
                <div class="product-rating-count link-primary">${
                  product.rating.count
                }</div>
            </div>

            <div class="product-price">${product.getPrice()}</div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            ${product.extraInfoHTML()}
            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png" />
            Added
            </div>
            
            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
              product.id
            }">Add to Cart</button>
            </div>
            `;
  });

  document.querySelector(".products-grid").innerHTML = productList;
}

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += Number(item.quantity);
  });

  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

