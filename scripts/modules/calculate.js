export const calculateWithDiscount =
  product => product.price - product.discount * product.price / 100;

export const twoNumbersAfterPoint = num => Math.floor(num * 100) / 100;

const calculateTotalPrice = goods => {
  const totalPrice = document.querySelector('.total__price');
  const total = goods.reduce((sum, product) =>
    sum + calculateWithDiscount(product) * product.count, 0);
  totalPrice.textContent = '$\xA0' + total.toFixed(2);
};

export default calculateTotalPrice;
