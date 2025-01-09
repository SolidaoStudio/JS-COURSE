function Cart(name) {
  const cart = {
    cartItems : undefined,

    loadFromStorage() {     
      this.cartItems = JSON.parse(localStorage.getItem(`${name}-oop`)) ;
      if (!this.cartItems){
        this.cartItems = [
          {
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '2'
          },  {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '1'
        }];
      };
    },

    saveToStorage() {
      localStorage.setItem(`${name}-oop`, JSON.stringify(this.cartItems))
    },

    addToCart (id, quantity) {
      let matchItem;
      if (!quantity){
        quantity = '1';
      }

      this.cartItems.forEach((cartItem) => {
        if (id === cartItem.productId) {
          matchItem = cartItem;
        }

    });

    if (matchItem) {
      matchItem.quantity += parseInt(quantity);
    } else {
      this.cartItems.push({
        productId: id,
        quantity: parseInt(quantity),
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();
    },

    removeFromCart(productId){
      const newCart = [];
      
       this.cartItems.forEach((cartItem) => {
          if (productId !== cartItem.productId){
            newCart.push(cartItem);
          }
        })
      
      this.cartItems = newCart;
      this.saveToStorage();
    },

    updateCartQuantity (x) {
      let cartQuantity = 0;
      this.cartItems.forEach((item) => {
        cartQuantity += Number(item.quantity);
      });

        document.querySelector(`${x}`).innerHTML = cartQuantity;

      this.saveToStorage()
    },

    updateDeliveryOption (option,id) {
      let matchingItem;
      this.cartItems.forEach( cartItem => {
        if (cartItem.productId === id){
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = option;
      this.saveToStorage();
    },

  }
  return cart;
}

const cart = Cart('cart');
const businessCart = Cart('business-cart');

cart.loadFromStorage();
businessCart.loadFromStorage();
businessCart.removeFromCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');

console.log(cart);
console.log(businessCart);

