import getElements from './modules/getElements.js';
import {formControl, listControl, discountCheckboxControl, addButtonControl, overlayControl} from './modules/control.js';
import renderGoods from './modules/render.js';

const init = () => {
  const {
    list,
    closeButtonsGroup,
    form,
    discountCheckbox,
    discountInput,
    overlaysGroup,
    addButton,
  } = getElements();

  const [overlayForm, overlayError] = overlaysGroup;

  renderGoods(list);
  listControl(list);
  formControl(form, overlayForm, overlayError, list);
  overlayControl(overlaysGroup, closeButtonsGroup);
  discountCheckboxControl(discountCheckbox, discountInput);
  addButtonControl(addButton, overlayForm);
};

init();
