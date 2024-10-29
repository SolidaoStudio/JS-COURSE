function changeSubscribeButton() {
    let subScribeButtonJs = document.querySelector('subscribeButton');
    if ( subScribeButtonJs.innerHTML === 'Subscribe'){
        subScribeButtonJs.innerHTML = 'Subscribed';
    }
    else {
        subScribeButtonJs.innerHTML = 'Subscribe';
    }
}

function calculate (){
    let orderCost = document.querySelector('#orderCost');
    let cost = parseFloat(orderCost.value);
    document.getElementById('calculateResult').innerHTML = (cost <40) ? '$' + (cost + 10) : '$' + cost;
}

document.getElementById('subscribeButton').addEventListener('click', changeSubscribeButton);
document.getElementById('orderCost').addEventListener('keydown', function(event){ 
    if (event.key === 'Enter') calculate();
})
document.getElementById('calculateButton').addEventListener('click', calculate)