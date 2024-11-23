function changeSubscribeButton() {
  let subScribeButtonJs = document.querySelector("#subscribeButton");
  if (subScribeButtonJs.innerHTML === "Subscribe") {
    subScribeButtonJs.innerHTML = "Subscribed";
    document
      .getElementById("subscribeButton")
      .classList.remove("subscribeButtonOff");
    document
      .getElementById("subscribeButton")
      .classList.add("subscribeButtonOn");
  } else {
    subScribeButtonJs.innerHTML = "Subscribe";
    document
      .getElementById("subscribeButton")
      .classList.remove("subscribeButtonOn");
    document
      .getElementById("subscribeButton")
      .classList.add("subscribeButtonOff");
  }
}
function calculate() {
  let orderCost = document.querySelector("#orderCost");
  let cost = parseFloat(orderCost.value);
  document.getElementById("calculateResult").innerHTML =
    cost < 40 ? "$" + (cost + 10) : "$" + cost;
}

document
  .getElementById("subscribeButton")
  .addEventListener("click", changeSubscribeButton);
document
  .getElementById("orderCost")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") calculate();
  });
document.getElementById("calculateButton").addEventListener("click", calculate);
