import { cart, removeFromCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"



function render (){
  let cartList = '';
  cart.forEach((cartItem, index) => {
    
    const today = dayjs();
    const deliveryDateFree = today.add(7,'days');
    const deliveryDateMid = today.add(3,'days');
    const deliveryDateTop = today;

    const  productId = cartItem.productId;

    let matchingProduct;
    products.forEach((product) => {
      if (productId === product.id){
        matchingProduct = product;
      }
    });

    cartList += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              ${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label-id-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-container-id-${matchingProduct.id}">
                <span class="update-quantity-link link-primary update-link-id-${matchingProduct.id}" data-update-id="${matchingProduct.id}">
                  Update
                </span>
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${index}">
              <div>
                <div class="delivery-option-date">
                  ${deliveryDateFree.format('dddd, MMM D')}
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${index}">
              <div>
                <div class="delivery-option-date">
                  ${deliveryDateMid.format('dddd, MMM D')}
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${index}">
              <div>
                <div class="delivery-option-date">
                  ${deliveryDateTop.format('dddd, MMM D')}
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  });
  document.querySelector(".order-summary").innerHTML = cartList;
};

document.querySelectorAll('.js-delete-link').forEach(link => {
  link.addEventListener('click', () => {

    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();

  });
});

function updateProductQuantity (productId){
    let value = document.querySelector(`.input-value-of-${productId}`).value;
    cart.forEach(item=> {
      if (item.productId === productId){
        item.quantity = value;
        updateCartQuantity(".checkout-total-itens");
        render();
        addEventListener();
      }
    });
}

function addEventListener(){
  document.querySelectorAll('.update-quantity-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

      const id = link.dataset.updateId;
      
      document.querySelector(`.quantity-label-id-${id}`).innerHTML = '';
      document.querySelector(`.update-container-id-${id}`).innerHTML = (`
        <input type='text' style='width: 30px;' class='input-value-of-${id}'>
        <span class="link-primary save-${id}">Save</span>`
      );

      document.querySelector(`.save-${id}`).addEventListener('click',()=>{
        updateProductQuantity(id)
      })
      document.querySelector(`.input-value-of-${id}`).addEventListener('keypress',(event) => {
        if (event.key === 'Enter') {
          updateProductQuantity(id)
        }
      });

    });
  });
};


render();
updateCartQuantity(".checkout-total-itens");
addEventListener(); 
