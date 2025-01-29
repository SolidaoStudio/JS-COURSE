import { updateCartQuantity, cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { getShipping } from "../../data/deliveryoptions.js";
import { addOrder } from "../../data/orders.js"

function totalItemsPrice(){
  let totalItemsPrice = 0;
  cart.forEach( cartItem => {
    const matchingProduct = getProduct(cartItem.productId);
    totalItemsPrice += (matchingProduct.priceCents * cartItem.quantity);
  });
  return totalItemsPrice;
}

function totalShippingPrice(){
  let totalShippingPrice = 0;
  cart.forEach (cartItem => {
    const matchingShipping = getShipping(cartItem.deliveryOptionId);
    totalShippingPrice += matchingShipping.priceCents;
  })
  return totalShippingPrice;
}

export function renderPaymentSummary () {

  const itemsPrice = totalItemsPrice();
  const ShippingPrice = totalShippingPrice();
  const totalBeforeTax = itemsPrice + ShippingPrice;
  const estimatedTax = totalBeforeTax/10;
  const orderTotal = totalBeforeTax + estimatedTax;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Payment Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (<span class="paymentTotalItens"></span>):</div>
      <div class="payment-summary-money">$${formatCurrency(itemsPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(ShippingPrice)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
`
  document.querySelector('.payment-summary').innerHTML = paymentSummaryHTML;
  updateCartQuantity('.paymentTotalItens')

  document.querySelector('.js-place-order')
    .addEventListener('click', async ()=>{

      try {
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cart: cart
          })
        })

        const order = await response.json();
        addOrder(order);
      } catch (error) {
        console.log('Unexpected error. Try again later.')
      }

      window.location.href = 'orders.html';

    });

}


