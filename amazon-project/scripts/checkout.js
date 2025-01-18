import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
/*import "../data/backend-pratice.js"*/

Promise.all([

  new Promise((resolve)=>{
    console.log( "start promise" );
    loadProducts(()=>{
      resolve('Test - Passing values using resolve - Success');
    });
  }),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    })
  }),

]).then((values)=>{
  console.log(values);
  render();
})





export function render (){
  renderPaymentSummary();
  renderOrderSummary();
}

// loadProducts(render); 

