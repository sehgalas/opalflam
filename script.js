// Sample Product Data
const products = [
  { id: 1, name: "Vanilla Candle", price: 20, image: "images/candle1.jpg" },
  { id: 2, name: "Lavender Candle", price: 25, image: "images/candle2.jpg" },
  { id: 3, name: "Sandalwood Candle", price: 30, image: "images/candle3.jpg" },
];

// Shopping Cart
let cart = [];
let total = 0;

// DOM Elements
const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// Display Products
function displayProducts(products) {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  total += product.price;
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total;
}

// Clear Cart
clearCartButton.addEventListener("click", () => {
  cart = [];
  total = 0;
  updateCart();
});

// Search Products
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

// Responsive Menu
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Initialize
displayProducts(products);
