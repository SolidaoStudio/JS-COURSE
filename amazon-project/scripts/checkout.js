import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";

export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}
render();
