import { orderList } from "./chekout/orderList.js";
import { orderSummary } from "./chekout/orderSummary.js";

export function render (){
  orderList();
  orderSummary();
}
render();
