import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import '../data/cart-oop.js';

export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}
render();
