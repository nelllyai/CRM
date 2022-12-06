'use strict';

const modal = document.querySelector('.form-article');

const title = modal.querySelector('h2');

const closeButton = modal.querySelector('.overlay__close-button');
const productId = modal.querySelector('.form-article__id');

const form = modal.querySelector('form');

const discountCheckbox = modal.querySelector('.add-form__checkbox');
const discountInput = modal
    .querySelector('.add-form__checkbox ~ .add-form__input');

const totalPrice = modal.querySelector('.total__price');
