// Sample products
const products = [
  { id: 1, name: "Shoes", price: 1200, img: "https://via.placeholder.com/250x200" },
  { id: 2, name: "T-Shirt", price: 500, img: "https://via.placeholder.com/250x200" },
  { id: 3, name: "Watch", price: 1500, img: "https://via.placeholder.com/250x200" },
  { id: 4, name: "Headphones", price: 2200, img: "https://via.placeholder.com/250x200" },
];

let cart = [];

// Load products
function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
  openCart();
}

// Update cart
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = sum;
  cartCount.textContent = cart.length;
}

// Toggle cart sidebar
function openCart() {
  document.getElementById("cart-sidebar").classList.add("active");
}

// Checkout
function checkout() {
  alert("Thank you for shopping! Your order has been placed.");
  cart = [];
  updateCart();
  document.getElementById("cart-sidebar").classList.remove("active");
}

// Responsive menu toggle
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

window.onload = loadProducts;
