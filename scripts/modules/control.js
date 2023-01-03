import calculateTotalPrice from './calculate.js';
import createRow from './createElements.js';
import fetchRequest from './fetchRequest.js';
import { showModal, showError } from './modal.js';

const updateRow = (id, data) => {
  const row = document.querySelector(`[data-id="${id}"]`);
  const { title, category, units, count, price } = data;
  const tds = row.querySelectorAll('.cms__td');

  tds[1].textContent = title;
  tds[2].textContent = category;
  tds[3].textContent = units;
  tds[4].textContent = count;
  tds[5].textContent = '$' + price;
  tds[6].textContent = '$' + count * price;
};

const getTotalPrice = () => {
  fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      calculateTotalPrice(goods);
    },
  });
};

export const formControl = (form, overlay) => {
  form.addEventListener('change', () => {
    const totalPrice = overlay.querySelector('.total__price');
    const total = +form.count.value * +form.price.value;
    totalPrice.textContent = '$\xA0' + total.toFixed(2);
  });
};

export const addFormControl = (form, overlay, list) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
      method: 'POST',
      body: Object.fromEntries(formData),
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
        list.append(createRow(product));
        getTotalPrice();
      },
    });
  });
};

export const editFormControl = (form, overlay, id) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetchRequest(`https://shorthaired-veiled-fascinator.glitch.me/api/goods/${id}`, {
      method: 'PATCH',
      body: Object.fromEntries(formData),
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
        updateRow(product.id, product);
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
      fetchRequest(`https://shorthaired-veiled-fascinator.glitch.me/api/goods/${currentId}`, {
        method: 'DELETE',
        callback(err) {
          if (err) return;
          getTotalPrice();
        },
      });
      row.remove();
    } else if (target.closest('.table-button_image') && row.dataset.pic) {
      const x = screen.width / 2 - 300;
      const y = screen.height / 2 - 300;
      const popup = open('about:blank', '',
        `width=600,height=600,top=${y},left=${x}`);
      popup.document.body.innerHTML = `<img src="https://shorthaired-veiled-fascinator.glitch.me/${row.dataset.pic}">`;
    } else if (target.closest('.table-button_edit')) {
      fetchRequest(`https://shorthaired-veiled-fascinator.glitch.me/api/goods/${currentId}`, {
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
  overlay.addEventListener('click', ({ target }) => {
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
