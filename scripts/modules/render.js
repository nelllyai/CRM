import createRow, { createOption } from './createElements.js';
import calculateTotalPrice from './calculate.js';
import fetchRequest from './fetchRequest.js';

const url = 'https://shorthaired-veiled-fascinator.glitch.me';

const renderGoods = elem => {
  fetchRequest(`${url}/api/goods`, {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      const allRow = goods.map(createRow);
      elem.append(...allRow);
      calculateTotalPrice(goods);
    },
  });
};

export const renderCategories = datalist => {
  fetchRequest(`${url}/api/category`, {
    method: 'GET',
    callback(err, list) {
      if (err) return;
      const allOptions = list.map(createOption);
      datalist.append(...allOptions);
    },
  });
};

export default renderGoods;
