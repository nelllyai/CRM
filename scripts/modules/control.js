import toBase64 from './base64.js';
import calculateTotalPrice from './calculate.js';
import createRow from './createElements.js';
import fetchRequest, {address} from './fetchRequest.js';
import {showModal, showError, showConfirmation} from './modal.js';
import { renderFilteredGoods } from './render.js';

const updateRow = (id, data) => {
  const row = document.querySelector(`[data-id="${id}"]`);
  row.replaceWith(createRow(data));
};

const getTotalPrice = () => {
  fetchRequest(`/api/goods`, {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      calculateTotalPrice(goods);
    },
  });
};

export const formControl = (form, overlay, method, list, id) => {
  form.addEventListener('input', ({target}) => {
    if (target === form.discount || target === form.count ||
      target === form.price) {
      target.value = target.value.replace(/\D/, '');
    } else if (target === form.units) {
      target.value = target.value.replace(/[^а-я]/i, '');
    } else if (target === form.title ||
      target === form.caregory || target === form.description) {
      target.value = target.value.replace(/[^а-я\s]/i, '');
    }
  });

  form.addEventListener('change', () => {
    const totalPrice = overlay.querySelector('.total__price');
    const total = +form.count.value * +form.price.value;
    totalPrice.textContent = '$\xA0' + total.toFixed(2);
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.image = await toBase64(data.image);

    fetchRequest(`/api/goods${id ? '/' + id : ''}`, {
      method,
      body: data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      callback(err, product) {
        if (err) {
          showError(err);
          return;
        }

        form.reset();
        overlay.remove();

        if (list) {
          list.append(createRow(product));
        } else if (id) {
          updateRow(product.id, product);
        }

        getTotalPrice();
      },
    });
  });
};

export const listControl = list => {
  list.addEventListener('click', event => {
    const target = event.target;
    const row = target.closest('tr');
    const currentId = row.dataset.id;

    if (target.closest('.table-button_delete')) {
      showConfirmation(currentId, row);
    } else if (target.closest('.table-button_image') && row.dataset.pic) {
      const x = screen.width / 2 - 300;
      const y = screen.height / 2 - 300;
      const popup = open('about:blank', '',
          `width=600,height=600,top=${y},left=${x}`);
      popup.document.body.innerHTML =
        `<img src="${address}/${row.dataset.pic}" style="max-width: 600px;">`;
    } else if (target.closest('.table-button_edit')) {
      fetchRequest(`/api/goods/${currentId}`, {
        method: 'GET',
        callback(err, product) {
          showModal(err, product, list);
        },
      });
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

export const addButtonControl = (addButton, list) => {
  addButton.addEventListener('click', () => {
    showModal(null, null, list);
  });
};

export const overlayControl = (overlay, closeButton) => {
  overlay.addEventListener('click', ({target}) => {
    if (target === overlay || target === closeButton) {
      overlay.remove();
    }
  });
};

export const fileControl = (fileInput, preview, err) => {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const src = URL.createObjectURL(file);

      const sizeInMegabytes = file.size / 2 ** 20;
      if (sizeInMegabytes > 1) {
        err.style.visibility = 'visible';
        preview.removeAttribute('src');
        fileInput.value = '';
      } else {
        err.style.visibility = 'hidden';
        preview.src = src;
        preview.style.display = 'block';
      }
    }
  });
};

export const confirmationControl = (modal, id, row) => {
  modal.addEventListener('click', ({target}) => {
    if (target.tagName === 'BUTTON') {
      if (target.classList.contains('button-agree')) {
        fetchRequest(`/api/goods/${id}`, {
          method: 'DELETE',
          callback(err) {
            if (err) {
              showError(err);
              return;
            }

            getTotalPrice();
            row.remove();
          },
        });
      }
      modal.remove();
    }
  });
};

export const searchControl = (search, list) => {
  search.addEventListener('input', event => {
    const text = event.target.value;

    setTimeout(() => {
      if (text === event.target.value) {
        renderFilteredGoods(list, text);
      }
    }, 300);
  });
};
