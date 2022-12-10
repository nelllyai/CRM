'use strict';

const modal = document.querySelector('.form-article');

const title = modal.querySelector('h2');

const closeButton = modal.querySelector('.overlay__close-button');
const productId = modal.querySelector('.form-article__id');

const form = document.querySelector('.form-article');

const discountCheckbox = modal.querySelector('.add-form__checkbox');
const discountInput = modal
    .querySelector('.add-form__checkbox ~ .add-form__input');

const totalPrice = modal.querySelector('.total__price');

const createRow = obj => {
  const tr = document.createElement('tr');

  for (const value of Object.values(obj)) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.append(td);
  }

  return tr;
};

const renderGoods = (elem, goods) => {
  const allRow = goods.map(createRow);
  elem.append(...allRow);
};

const overlay = document.querySelector('.overlay');

const addButton = document.querySelector('.cms__add-button');
addButton.addEventListener('click', () => {
  overlay.classList.add('overlay_show');
});

overlay.addEventListener('click', event => {
  const target = event.target;
  if (target === overlay || target === closeButton) {
    overlay.classList.remove('overlay_show');
  }
});

const table = document.querySelector('.cms__table');

table.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.table-button_delete')) {
    target.closest('tr').remove();
  }
});
