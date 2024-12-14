export function getShipping(deliveryOptionId) {
  let matchingShipping = 0;
    deliveryOptions.forEach(option => {
      if (option.id === deliveryOptionId){
        matchingShipping = option; 
      }
    })
   return matchingShipping;
}

export const deliveryOptions = [{
    id: '1',
    deliveryDate: 7,
    priceCents: 0
  },{
    id: '2',
    deliveryDate: 4,
    priceCents: 499
    }, {
    id: '3',
    deliveryDate: 1,
    priceCents: 999
  }
] ;
