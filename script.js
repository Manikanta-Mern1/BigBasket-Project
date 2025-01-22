// Add to cart function
function addToCart(productName, price) {
    // Get the existing cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Add the new product to the cart
    cart.push({ productName, price });
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(`${productName} added to the cart!`);
  }
  
  // Redirect to cart page
  function goToCart() {
    window.location.href = 'cart.html'; // Replace with the correct path to your cart page
  }
  