export let cart = [];
//Adiciona itens ao carrinho
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
