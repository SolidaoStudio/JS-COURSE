export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
  cart = [
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
    },  {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
    }
  ];
}


function saveToCart(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(id, quantity) {
  let matchItem;

  cart.forEach((cartItem) => {
    if (id === cartItem.id) {
      matchItem = cartItem;
    }
  });


  if (matchItem) {
    matchItem.quantity += quantity;
  } else {
    cart.push({
      productId: id,
      quantity: quantity,
    });
  }

  saveToCart();
}

export function removeFromCart(productId){

  const newCart = [];
  
   cart.forEach((cartItem) => {
      if (productId !== cartItem.productId){
        newCart.push(cartItem);
      }
    })
  
  cart = newCart;

  saveToCart();

}


export function updateCartQuantity (x) {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += Number(item.quantity);
  });

    document.querySelector(`${x}`).innerHTML = cartQuantity;

  saveToCart()
}
