import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
/*import "../data/backend-pratice.js"*/

async function loadPage() {

  await Promise.all([

    loadProductsFetch(),
    new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      })
    }),

  ]);

  render();
  console.log('load page');

  return (null);
}

loadPage().then(()=>{
  console.log('next step');
});

export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}

