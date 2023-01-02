import createRow from './createElements.js';
import calculateTotalPrice from './calculate.js';
import fetchRequest from './fetchRequest.js';

const renderGoods = elem => {
  fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      const allRow = goods.map(createRow);
      elem.append(...allRow);
      calculateTotalPrice(goods);
    },
  });
};

export default renderGoods;
