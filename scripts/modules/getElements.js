const getElements = () => ({
  list: document.querySelector('.cms__tbody'),
  closeButtonsGroup: document.querySelectorAll('.overlay__close-button'),
  form: document.querySelector('.add-form'),
  discountCheckbox: document.querySelector('.add-form__checkbox'),
  discountInput: document.querySelector('.add-form__checkbox ~ .add-form__input'),
  overlaysGroup: document.querySelectorAll('.overlay'),
  addButton: document.querySelector('.cms__add-button'),
});

export default getElements;
