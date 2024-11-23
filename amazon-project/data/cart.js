export let cart = [
  {
    producId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  },  {
    producId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
  }
];
export function addToCart(id) {
  let matchItem;

  cart.forEach((cartItem) => {
    if (id === cartItem.id) {
      matchItem = cartItem;
    }
  });

  if (matchItem) {
    matchItem.quantity += 1;
  } else {
    cart.push({
      id: id,
      quantity: 1,
    });
  }
}

export function removeFromCart(productId){

  const newCart = [];
  
   cart.forEach((cartItem) => {
      if (productId !== cartItem.producId){
        newCart.push(cartItem);
      }
    })
  
  cart = newCart;

}
