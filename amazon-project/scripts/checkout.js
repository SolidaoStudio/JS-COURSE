import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
/*import "../data/backend-pratice.js"*/

Promise.all([

  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    })
  }),

]).then((values)=>{
  console.log(values);
  render();
});





export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}

// loadProducts(render); 

