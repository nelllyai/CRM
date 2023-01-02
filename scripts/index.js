import getElements from './modules/getElements.js';
import {listControl, addButtonControl} from './modules/control.js';
import renderGoods from './modules/render.js';

const init = () => {
  const {
    list,
    addButton,
  } = getElements();

  renderGoods(list);
  listControl(list);
  addButtonControl(addButton, list);
};

init();
