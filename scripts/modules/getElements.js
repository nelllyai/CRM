const getElements = () => {
  return {
    list: document.querySelector('.cms__tbody'),
    closeButton: document.querySelector('.overlay__close-button'),
    form: document.querySelector('.add-form'),
    discountCheckbox: document.querySelector('.add-form__checkbox'),
    discountInput: document.querySelector('.add-form__checkbox ~ .add-form__input'),
    overlay: document.querySelector('.overlay'),
    addButton: document.querySelector('.cms__add-button'),
  }
};

export default getElements;
