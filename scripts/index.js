import getElements from './modules/getElements.js';
import {formControl, listControl, discountCheckboxControl, addButtonControl, overlayControl} from './modules/control.js';
import renderGoods from './modules/render.js';

const goods = [
  {
    id: 246016548,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 937295527,
    product: 'Настольная игра “На 4-х ногах”',
    category: 'Настольные игры',
    units: 'шт',
    description: 'Описание...',
    quantity: 12,
    cost: 14,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016547,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016546,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016545,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016544,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016543,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016542,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016541,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
  {
    id: 246016540,
    product: 'Навигационная система Soundmax',
    category: 'Техника для дома',
    units: 'шт',
    description: 'Описание...',
    quantity: 5,
    cost: 100,
    img: 'https://st16.stpulscen.ru/images/product/440/115/302_big.jpg',
  },
];

const init = goods => {
  const {
    list,
    closeButton,
    form,
    discountCheckbox,
    discountInput,
    overlay,
    addButton,
  } = getElements();

  // const goods = получение с сервера
  renderGoods(list, goods);
  listControl(list, goods);
  formControl(form, overlay, list, goods);
  overlayControl(overlay, closeButton);
  discountCheckboxControl(discountCheckbox, discountInput);
  addButtonControl(addButton, overlay);
};

init(goods);
