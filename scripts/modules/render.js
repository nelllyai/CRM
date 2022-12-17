import createRow from './createElements.js';
import calculateTotalPrice from './calculate.js';

const renderGoods = (elem, goods) => {
  const allRow = goods.map(createRow);
  elem.append(...allRow);
  calculateTotalPrice(goods);
};

export default renderGoods;
