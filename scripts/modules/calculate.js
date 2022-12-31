const calculateTotalPrice = goods => {
  const totalPrice = document.querySelector('.total__price');
  const total = goods.reduce((sum, product) =>
    sum + product.price * product.count, 0);
  totalPrice.textContent = '$\xA0' + total.toFixed(2);
};

export default calculateTotalPrice;
