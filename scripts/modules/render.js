import createRow from './createElements.js';
import calculateTotalPrice from './calculate.js';

const renderGoods = (err, goods, elem) => {
  if (err) {
    console.error(err);
    return;
  }
  const allRow = goods.map(createRow);
  elem.append(...allRow);
  calculateTotalPrice(goods);
};

export default renderGoods;
