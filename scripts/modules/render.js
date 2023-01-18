import createRow, {createOption} from './createElements.js';
import calculateTotalPrice from './calculate.js';
import fetchRequest from './fetchRequest.js';

const renderGoods = elem => {
  fetchRequest(`/api/goods`, {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      const allRow = goods.map(createRow);
      elem.append(...allRow);
      calculateTotalPrice(goods);
    },
  });
};

export const renderFilteredGoods = (elem, text) => {
  elem.innerHTML = '';

  fetchRequest(`/api/goods`, {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      const filteredGoods = goods.filter(product =>
          product.title.toLowerCase().startsWith(text.toLowerCase()) ||
          product.category.toLowerCase().startsWith(text.toLowerCase()));
      const allRow = filteredGoods.map(createRow);
      elem.append(...allRow);
    },
  });
};

export const renderCategories = datalist => {
  fetchRequest(`/api/category`, {
    method: 'GET',
    callback(err, list) {
      if (err) return;
      const allOptions = list.map(createOption);
      datalist.append(...allOptions);
    },
  });
};

export default renderGoods;
