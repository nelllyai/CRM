'use strict';

const goods = [
  {
    id: 246016548,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 937295527,
    product: 'Настольная игра “На 4-х ногах”',
    category: 'Настольные игры',
    units: 'шт',
    quantity: 12,
    cost: '$14',
    total: '$168',
  },
  {
    id: 246016547,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016546,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016545,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016544,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016543,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016542,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016541,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
  {
    id: 246016540,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    quantity: 5,
    cost: '$100',
    total: '$500',
  },
];

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
  tr.classList.add('cms__tr');

  for (const value of Object.values(obj)) {
    const td = document.createElement('td');
    td.classList.add('cms__td');
    td.textContent = value;
    tr.append(td);
  }

  tr.insertAdjacentHTML(
      'beforeend',
      `
      <td class="cms__td cms__td_small-padding">
        <button class="table-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.75 2.13375L17.8663 1.25L1.25 17.8663L2.13375 18.75L3.38375 17.5H16.25C16.5814 17.4995 16.899 17.3676 17.1333 17.1333C17.3676 16.899 17.4995 16.5814 17.5 16.25V3.38375L18.75 2.13375ZM16.25 16.25H4.63375L9.50437 11.3794L10.9913 12.8663C11.2257 13.1006 11.5435 13.2322 11.875 13.2322C12.2065 13.2322 12.5243 13.1006 12.7587 12.8663L13.75 11.875L16.25 14.3731V16.25ZM16.25 12.605L14.6337 10.9888C14.3993 10.7544 14.0815 10.6228 13.75 10.6228C13.4185 10.6228 13.1007 10.7544 12.8663 10.9888L11.875 11.98L10.3894 10.4944L16.25 4.63375V12.605Z"
              fill="#6E6893" />
            <path
              d="M3.75 13.75V11.875L6.875 8.75187L7.73313 9.61062L8.61812 8.72563L7.75875 7.86625C7.52434 7.63191 7.20646 7.50027 6.875 7.50027C6.54354 7.50027 6.22566 7.63191 5.99125 7.86625L3.75 10.1075V3.75H13.75V2.5H3.75C3.41858 2.50033 3.10083 2.63213 2.86648 2.86648C2.63213 3.10083 2.50033 3.41858 2.5 3.75V13.75H3.75Z"
              fill="#6E6893" />
          </svg>
        </button>
      </td>
      <td class="cms__td cms__td_small-padding">
        <button class="table-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2015_14)">
              <path
                d="M15.5629 4.86078L17.6394 6.93629L15.5629 4.86078ZM16.8982 3.03233L11.2834 8.64709C10.9933 8.9368 10.7955 9.3059 10.7148 9.70789L10.1962 12.304L12.7923 11.7844C13.1942 11.704 13.5629 11.5069 13.8531 11.2167L19.4678 5.60196C19.6366 5.43324 19.7704 5.23293 19.8617 5.01248C19.953 4.79203 20 4.55576 20 4.31714C20 4.07853 19.953 3.84225 19.8617 3.6218C19.7704 3.40136 19.6366 3.20105 19.4678 3.03233C19.2991 2.8636 19.0988 2.72976 18.8784 2.63845C18.6579 2.54714 18.4216 2.50014 18.183 2.50014C17.9444 2.50014 17.7081 2.54714 17.4877 2.63845C17.2672 2.72976 17.0669 2.8636 16.8982 3.03233V3.03233Z"
                stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M18.0394 14.2648V17.206C18.0394 17.726 17.8328 18.2248 17.4651 18.5925C17.0973 18.9602 16.5986 19.1668 16.0786 19.1668H5.29415C4.77411 19.1668 4.27537 18.9602 3.90765 18.5925C3.53993 18.2248 3.33334 17.726 3.33334 17.206V6.42157C3.33334 5.90154 3.53993 5.4028 3.90765 5.03508C4.27537 4.66735 4.77411 4.46077 5.29415 4.46077H8.23535"
                stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2015_14">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </td>
      <td class="cms__td cms__td_small-padding">
        <button class="table-button table-button_delete">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.03125 1.59375H4.875C4.96094 1.59375 5.03125 1.52344 5.03125 1.4375V1.59375H10.9688V1.4375C10.9688 1.52344 11.0391 1.59375 11.125 1.59375H10.9688V3H12.375V1.4375C12.375 0.748047 11.8145 0.1875 11.125 0.1875H4.875C4.18555 0.1875 3.625 0.748047 3.625 1.4375V3H5.03125V1.59375ZM14.875 3H1.125C0.779297 3 0.5 3.2793 0.5 3.625V4.25C0.5 4.33594 0.570312 4.40625 0.65625 4.40625H1.83594L2.31836 14.6211C2.34961 15.2871 2.90039 15.8125 3.56641 15.8125H12.4336C13.1016 15.8125 13.6504 15.2891 13.6816 14.6211L14.1641 4.40625H15.3438C15.4297 4.40625 15.5 4.33594 15.5 4.25V3.625C15.5 3.2793 15.2207 3 14.875 3ZM12.2832 14.4062H3.7168L3.24414 4.40625H12.7559L12.2832 14.4062Z"
              fill="#6E6893" />
          </svg>
        </button>
      </td>
    `
  );

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

const list = document.querySelector('.cms__tbody');
renderGoods(list, goods);

list.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.table-button_delete')) {
    const row = target.closest('tr');
    const currentId = +row.querySelector('td').textContent;
    goods.splice(goods.findIndex(product => product.id === currentId), 1);
    console.log(goods);
    row.remove();
  }
});
