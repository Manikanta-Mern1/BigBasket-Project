// Load cart data on page load
window.onload = function () {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the cart is empty
    if (cart.length === 0) {
      cartItems.innerHTML = '<li>Your cart is empty!</li>';
      return;
    }
  
    // Render each item in the cart
    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.productName} => Rs: ${item.price}`;
      // listItem.style.color = 'blue';
  
      // Add Remove button for each item
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.marginLeft = '10px';
      removeButton.onclick = () => removeFromCart(item,index);
  
      listItem.appendChild(removeButton);
      cartItems.appendChild(listItem);
    });
  };
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the item at the specified index
    cart.splice(index, 1);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the cart page to reflect the changes
    window.location.reload();
  }
  