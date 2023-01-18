import {
  confirmationControl, discountCheckboxControl,
  fileControl, formControl, overlayControl,
} from './control.js';
import loadStyles from './loadStyles.js';
import {renderCategories} from './render.js';
import {address} from './fetchRequest.js';

export const showError = async message => {
  await loadStyles('styles/overlay.css');
  await loadStyles('styles/message.css');

  const error = document.createElement('div');
  error.className = 'overlay';

  error.innerHTML = `
    <div class="message">
      <button class="overlay__close-button
        overlay__close-button_small"></button>
      <div class="message__content">
        <svg width="94" height="94" viewBox="0 0 94 94"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L92 92" stroke="#D80101"
            stroke-width="3" stroke-linecap="round" />
          <path d="M2 92L92 2" stroke="#D80101"
            stroke-width="3" stroke-linecap="round" />
        </svg>
        <p class="message__text">
          ${message.toString().includes('Ошибка') ?
            message : 'Что-то пошло не так'}
        </p>
      </div>
    </div>
  `;

  const close = error.querySelector('.overlay__close-button');

  document.body.append(error);
  overlayControl(error, close);
};

export const showModal = async (err, data, list) => {
  if (err) {
    showError(err);
    return;
  }

  await loadStyles('styles/overlay.css');
  await loadStyles('styles/form-article.css');
  await loadStyles('styles/add-form.css');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const formWrapper = document.createElement('article');
  formWrapper.className = 'form-article';

  const close = document.createElement('button');
  close.className = 'overlay__close-button';

  const headerWrapper = document.createElement('div');
  headerWrapper.className = 'form-article__header';

  const header = document.createElement('h2');
  header.classList.add('title', 'form-aritcle__title');
  header.textContent = data ? 'Изменить товар' : 'Добавить товар';

  headerWrapper.append(header);

  if (data) {
    const idWrapper = document.createElement('div');
    idWrapper.className = 'form-article__id';
    idWrapper.textContent = `ID: ${data.id}`;
    headerWrapper.append(idWrapper);
  }

  const hr = document.createElement('hr');

  const form = document.createElement('form');

  form.innerHTML = `
      <fieldset class="add-form__fieldset">
      <div class="add-form__field add-form__field_title">
        <label class="add-form__label" for="title">Наименование</label>
        <input class="add-form__input" type="text" name="title" id="title"
          autocomplete="off"
          ${data ? `value="${data.title}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_category">
        <label class="add-form__label" for="category">Категория</label>
        <input class="add-form__input" type="text"
          name="category" id="category" list="categories"
          autocomplete="off"
          ${data ? `value="${data.category}"` : ''} required>
        <datalist id="categories"></datalist>
      </div>

      <div class="add-form__field add-form__field_units">
        <label class="add-form__label" for="units">Единицы измерения</label>
        <input class="add-form__input" type="text" name="units" id="units"
          autocomplete="off"
          ${data ? `value="${data.units}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_discount">
        <label class="add-form__label" for="discount">Дисконт</label>
        <div class="checkbox">
          <input class="add-form__checkbox" type="checkbox"
            ${data && data.discount ? 'checked' : ''}>
          <input class="add-form__input" type="text"
            name="discount" id="discount" autocomplete="off"
            ${data && data.discount ?
              `value="${data.discount}"` : ''}
            ${data && data.discount ? '' : 'disabled'}>
        </div>
      </div>

      <div class="add-form__field add-form__field_description">
        <label class="add-form__label" for="description">Описание</label>
        <textarea class="add-form__textarea" name="description" id="description"
          minlength="80" required>${data ? data.description : ''}</textarea>
      </div>

      <div class="add-form__field add-form__field_count">
        <label class="add-form__label" for="count">Количество</label>
        <input class="add-form__input" type="text"
          name="count" id="count" autocomplete="off"
          ${data ? `value="${data.count}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_price">
        <label class="add-form__label" for="price">Цена</label>
        <input class="add-form__input" type="text"
          name="price" id="price" autocomplete="off"
          ${data ? `value="${data.price}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_image">
        <p class="add-form__error">
          Изображение не должно превышать размер 1 Мб
        </p>
        <div class="add-form__image">
          <label class="add-form__button-label
            button button_small" for="image">Добавить изображение</label>
          <input class="add-form__file" type="file"
            name="image" accept=".jpg, .jpeg, .png" id="image">
        </div>
        <img class="add-form__preview"
          ${data && data.image && data.image !== 'image/notimage.jpg' ?
            `src="${address}/${data.image}"` : ''}>
      </div>
    </fieldset>

    <div class="add-form__final">
      <div class="total">
        Итоговая стоимость: <span class="total__price">$&nbsp;
          ${(data ? data.count * data.price : 0).toFixed(2)}</span>
      </div>
      <button class="button" type="submit">
        ${data ? 'Изменить товар' : 'Добавить товар'}
      </button>
    </div>
  `;

  const discountCheckbox = form.querySelector('.add-form__checkbox');
  const discountInput = form.discount;

  const fileInput = form.image;
  const imagePreview = form.querySelector('.add-form__preview');
  const imageError = form.querySelector('.add-form__error');
  const datalistCategories = form.querySelector('datalist');

  overlay.append(formWrapper);
  formWrapper.append(close, headerWrapper, hr, form);

  document.body.append(overlay);
  overlayControl(overlay, close);
  discountCheckboxControl(discountCheckbox, discountInput);
  fileControl(fileInput, imagePreview, imageError);
  renderCategories(datalistCategories);

  if (!data) formControl(form, overlay, 'POST', list);
  else formControl(form, overlay, 'PATCH', null, data.id);
};

export const showConfirmation = async (id, row) => {
  await loadStyles('styles/overlay.css');
  await loadStyles('styles/message.css');

  const confirmation = document.createElement('div');
  confirmation.className = 'overlay';

  confirmation.innerHTML = `
    <div class="message">
      <button class="overlay__close-button
        overlay__close-button_small"></button>
      <div class="message__content">
        <p class="message__text">
          Вы действительно хотите удалить товар под ID: ${id}?
        </p>
        <div class="message__buttons-group">
          <button class="button button-agree">Да</button>
          <button class="button">Нет</button>
        </div>
      </div>
    </div>
  `;

  const close = confirmation.querySelector('.overlay__close-button');

  document.body.append(confirmation);
  overlayControl(confirmation, close);
  confirmationControl(confirmation, id, row);
};
