
import { cart, removeFromCart, updateCartQuantity, updateDeliveryOption } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions } from "../../data/deliveryoptions.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { render } from "../checkout.js";

export function orderList (){
  let cartList = '';   

  cart.forEach((cartItem) => {
    const  productId = cartItem.productId;

    let matchingProduct;
    products.forEach((product) => {
      if (productId === product.id){
        matchingProduct = product;
      }
    });
    
    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (deliveryOptionId === option.id){
        deliveryOption = option;
      }
    });

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDate,'days')
    const deliveryString = deliveryDate.format('dddd, MMMM D')


    cartList += `
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date"> Delivery date: ${deliveryString} </div>
        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">
          <div class="cart-item-details">

            <div class="product-name"> ${matchingProduct.name} </div>
            <div class="product-price"> ${formatCurrency(matchingProduct.priceCents)} </div>

            <div class="product-quantity">
              <span> 
                Quantity: <span class="quantity-label-id-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-container-id-${matchingProduct.id}">
                <span class="update-quantity-link link-primary update-link-id-${matchingProduct.id}" data-update-id="${matchingProduct.id}"> Update </span>
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option :
            </div>
             ${deliveryOptionsHTML(matchingProduct.id, cartItem.deliveryOptionId)}
          </div>

        </div>
      </div>
    ` 
  });
  document.querySelector(".order-summary").innerHTML = cartList;
  updateCartQuantity(".checkout-total-itens");

  deliveryOption();
  deleteItemLink ();
  updateQuantityLink(); 

};

function deliveryOptionsHTML(productId, deliveryOption){
  let html = '';
  deliveryOptions.forEach((option) => {
    const isChecked = deliveryOption === option.id;
    const today = dayjs();
    const deliveryDate = today.add(option.deliveryDate,'days')
    const price = option.priceCents === 0 ? 'FREE' : formatCurrency(option.priceCents);

    html += `
      <div class="delivery-option js-delivery-option" data-product-id="${productId}" data-delivery-option-id="${option.id}">
        <input type="radio"
          ${isChecked ? 'checked'  : '' }
          class="delivery-option-input"
          name="delivery-option-${productId}">
        <div>
          <div class="delivery-option-date">
            ${deliveryDate.format('dddd, MMMM D')}
          </div>
          <div class="delivery-option-price">
            $${price} - Shipping
          </div>
        </div>
      </div>
    `;
  })

  return html;
}

function updateQuantityLink(){
  document.querySelectorAll('.update-quantity-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

      const id = link.dataset.updateId;
      
      document.querySelector(`.quantity-label-id-${id}`).innerHTML = '';
      document.querySelector(`.update-container-id-${id}`).innerHTML = (`
        <input type='text' style='width: 30px;' class='input-value-of-${id}'>
        <span class="link-primary save-${id}">Save</span>
      `);

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

function updateProductQuantity (productId){
    const value = document.querySelector(`.input-value-of-${productId}`).value;
    cart.forEach(item=> {
      if (item.productId === productId){
        item.quantity = value;
        render();
      }
    });
}
 
function deleteItemLink (){
  document.querySelectorAll('.js-delete-link').forEach(link => {
    link.addEventListener('click', () => {

      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      render();
    });
  }); 
}

function deliveryOption () {
  document.querySelectorAll(".js-delivery-option").forEach(element => {
    element.addEventListener('click',()=>{
      const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(deliveryOptionId, productId);
      render();
    });
  })
}

