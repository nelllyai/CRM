import calculateTotalPrice from "./calculate.js";
import createRow from "./createElements.js";

const addProductData = (product, goods) => {
  goods.push(product);
};

const addProductPage = (product, list) => {
  list.append(createRow(product));
};

const closeOverlay = overlay => {
  overlay.classList.remove('overlay_show');
};

export const formControl = (form, overlay, list, goods) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newId = +overlay.querySelector('.form-article__current-id').textContent;
    const newProduct = Object.assign({ id: newId }, Object.fromEntries(formData));

    addProductData(newProduct, goods);
    addProductPage(newProduct, list);

    form.reset();
    closeOverlay(overlay);
  });

  form.addEventListener('change', () => {
    const totalPrice = overlay.querySelector('.total__price');
    const total = +form.quantity.value * +form.cost.value;
    totalPrice.textContent = '$\xA0' + total.toFixed(2);
  });
};

export const listControl = (list, goods) => {
  list.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.table-button_delete')) {
      const row = target.closest('tr');
      const currentId = +row.querySelector('td').textContent;
      goods.splice(goods.findIndex(product => product.id === currentId), 1);
      row.remove();
      calculateTotalPrice(goods);
    }
  });
};

export const discountCheckboxControl = (discountCheckbox, discountInput) => {
  discountCheckbox.addEventListener('change', () => {
    discountInput.disabled = !discountInput.disabled;

    if (discountInput.disabled) {
      discountInput.value = '';
    }
  });
};

export const addButtonControl = (addButton, overlay) => {
  addButton.addEventListener('click', () => {
    overlay.classList.add('overlay_show');
  });
};

export const overlayControl = (overlay, closeButton) => {
  overlay.addEventListener('click', event => {
    const target = event.target;
    if (target === overlay || target === closeButton) {
      closeOverlay(overlay);
    }
  });
};
