let products = [
  {
    image: "./images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 45,
      count: 87,
    },
    princeCents: 1090,
  },
  {
    image: "./images/products/intermediate-composite-basketball.jpg",
    name: "product-name limit-text-to-2-lines",
    rating: {
      stars: 40,
      count: 127,
    },
    princeCents: 2095,
  },
  {
    image: "./images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 45,
      count: 54,
    },
    princeCents: 799,
  },
];

function render() {
  let productList = "";
  products.forEach(function (value) {
    const { image } = value;
    const { name } = value;
    const { stars } = value.rating;
    const { count } = value.rating;
    const price = value.princeCents / 100;

    productList += `
        <div class="product-container">
            <div class="product-image-container">
                <img
                    class="product-image"
                    src="${image}"
                />
            </div>

            <div class="${name}">
            Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div class="product-rating-container">
                <img
                    class="product-rating-stars"
                    src="images/ratings/rating-${stars}.png"
                />
                <div class="product-rating-count link-primary">${count}</div>
            </div>

            <div class="product-price">${price}</div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button class="add-to-cart-button button-primary">Add to Cart</button>
    </div>
  `;
    /*
    console.log(image);
    console.log(name);
    console.log(stars);
    console.log(count);
    console.log(price);
    */
  });
  document.querySelector(".products-grid").innerHTML = productList;
}
render();
