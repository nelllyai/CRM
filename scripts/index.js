import getElements from './modules/getElements.js';
import {formControl, listControl, discountCheckboxControl, addButtonControl, overlayControl} from './modules/control.js';
import renderGoods from './modules/render.js';

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

  renderGoods(list);
  listControl(list);
  formControl(form, overlay, list);
  overlayControl(overlay, closeButton);
  discountCheckboxControl(discountCheckbox, discountInput);
  addButtonControl(addButton, overlay);
};

init();
