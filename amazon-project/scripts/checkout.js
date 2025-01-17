import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import { loadProducts } from "../data/products.js";
/*import "../data/backend-pratice.js"*/

export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}


loadProducts(render);
