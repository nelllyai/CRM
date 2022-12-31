import calculateTotalPrice from './calculate.js';
import createRow from './createElements.js';
import fetchRequest from './fetchRequest.js';

const closeOverlay = overlay => {
  overlay.classList.remove('overlay_show');
};

const getTotalPrice = () => {
  fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
    method: 'GET',
    callback(err, goods) {
      if (err) return;
      calculateTotalPrice(goods);
    }
  });
};

export const formControl = (form, overlay, error, list) => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
      method: 'POST',
      body: Object.fromEntries(formData),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      callback(err, product) {
        if (err) {
          error.classList.add('overlay_show');
          
          if (err.toString().includes('Ошибка')) {
            const errorText = error.querySelector('.error__text');
            errorText.textContent = err;
          }

          return;
        }
        form.reset();
        closeOverlay(overlay);
        list.append(createRow(product));
        getTotalPrice();
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
      const currentId = row.querySelector('td').textContent;
      fetchRequest(`https://shorthaired-veiled-fascinator.glitch.me/api/goods/${currentId}`, {
        method: 'DELETE',
        callback(err) {
          if (err) return;
          getTotalPrice();
        }
      });
      row.remove();
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

export const overlayControl = (overlays, closeButton) => {
  for (let i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener('click', ({ target }) => {
      if (target === overlays[i] || target === closeButton[i]) {
        closeOverlay(overlays[i]);
      }
    });
  }
};
