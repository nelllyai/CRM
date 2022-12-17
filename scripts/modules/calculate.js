const calculateTotalPrice = goods => {
  const totalPrice = document.querySelector('.total__price');
  const total = goods.reduce((sum, product) =>
    sum + product.cost * product.quantity, 0);
  totalPrice.textContent = '$\xA0' + total.toFixed(2);
};

export default calculateTotalPrice;
