import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import "../data/backend-pratice.js"

export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}
render();
