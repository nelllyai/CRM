import getElements from './modules/getElements.js';
import {formControl, listControl, discountCheckboxControl, addButtonControl, overlayControl} from './modules/control.js';
import renderGoods from './modules/render.js';
import getGoods from './modules/data.js';

const init = () => {
  const {
    list,
    closeButton,
    form,
    discountCheckbox,
    discountInput,
    overlay,
    addButton,
  } = getElements();

  getGoods(list);
  // renderGoods(list, goods);
  // listControl(list, goods);
  // formControl(form, overlay, list, goods);
  overlayControl(overlay, closeButton);
  discountCheckboxControl(discountCheckbox, discountInput);
  addButtonControl(addButton, overlay);
};

init();
