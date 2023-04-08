// Add to cart functionality

const addToCartButtons = document.querySelectorAll('.button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

