import getElements from './modules/getElements.js';
import {listControl, addButtonControl, searchControl} from './modules/control.js';
import renderGoods from './modules/render.js';

const init = () => {
  const {
    list,
    addButton,
    search
  } = getElements();

  renderGoods(list);
  listControl(list);
  addButtonControl(addButton, list);
  searchControl(search, list);
};

init();
