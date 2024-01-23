let cartTotalAmount = 10.00; 

function adjustQuantity(itemId, action) {
  const quantityElement = document.getElementById(`${itemId}-quantity`);
  const totalElement = document.getElementById(`${itemId}-total`);

  let quantity = parseInt(quantityElement.innerText);

  if (action === 'increase') {
    quantity++;
    cartTotalAmount += 10.00;
  } else if (action === 'decrease' && quantity > 1) {
    quantity--;
    cartTotalAmount -= 10.00;
  }

  quantityElement.innerText = quantity;
  totalElement.innerText = `$${(quantity * 10).toFixed(2)}`;
  document.getElementById('cart-total-amount').innerText = cartTotalAmount.toFixed(2);
}

function deleteItem(itemId) {
  const item = document.getElementById(itemId);
  const totalElement = document.getElementById(`${itemId}-total`);
  const quantityElement = document.getElementById(`${itemId}-quantity`);

  cartTotalAmount -= parseFloat(totalElement.innerText.slice(1));
  document.getElementById('cart-total-amount').innerText = cartTotalAmount.toFixed(2);

  item.remove();
}

function toggleLike(itemId) {
  const likeBtn = document.getElementById(itemId).getElementsByClassName('like-btn')[0];

  likeBtn.classList.toggle('liked');
}
