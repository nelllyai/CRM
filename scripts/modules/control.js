import calculateTotalPrice from './calculate.js';
import createRow from './createElements.js';
import fetchRequest from './fetchRequest.js';

const addProductData = (product, goods) => {
  goods.push(product);
};

const addProductPage = (product, list) => {
  list.append(createRow(product));
};

const closeOverlay = overlay => {
  overlay.classList.remove('overlay_show');
};

export const formControl = (form, overlay, list) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
      method: 'POST',
      body: Object.fromEntries(formData),
      callback(err, product) {
        if (err) {
          console.error(err);
          return;
        }
        form.reset();
        closeOverlay(overlay);
        list.append(createRow(product));
      },
    });
  });

  form.addEventListener('change', () => {
    const totalPrice = overlay.querySelector('.total__price');
    const total = +form.count.value * +form.price.value;
    totalPrice.textContent = '$\xA0' + total.toFixed(2);
  });
};

export const listControl = list => {
  list.addEventListener('click', event => {
    const target = event.target;
    const row = target.closest('tr');

    if (target.closest('.table-button_delete')) {
      // const currentId = +row.querySelector('td').textContent;
      // goods.splice(goods.findIndex(product => product.id === currentId), 1);
      // row.remove();
      // calculateTotalPrice(goods);
    } else if (target.closest('.cms__td_img') && row.dataset.pic) {
      const x = screen.width / 2 - 300;
      const y = screen.height / 2 - 300;
      const popup = open('about:blank', '', `width=600,height=600,top=${y},left=${x}`);
      popup.document.body.innerHTML = `<img src="https://shorthaired-veiled-fascinator.glitch.me/${row.dataset.pic}">`;
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
