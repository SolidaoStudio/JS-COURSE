import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { renderOrderSummary } from "./chekout/orderSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
/*import "../data/backend-pratice.js"*/

async function loadPage() {

  try {

    // throw 'test - error 1'

    await Promise.all([

      loadProductsFetch(),
      new Promise((resolve, reject)=>{
        // throw 'test - error 2'
        loadCart(()=>{
          // reject ('test - error 3')
          resolve();
        })
      }),

    ]);

  } catch (error) {

    console.log('Unexpected error. Please try again later.')

  }

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

