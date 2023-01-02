import { discountCheckboxControl, formControl, overlayControl } from './control.js';
import loadStyles from './loadStyles.js';

export const showError = async message => {
  await loadStyles('styles/overlay.css');
  await loadStyles('styles/error.css');

  const error = document.createElement('div');
  error.className = 'overlay';

  error.innerHTML = `
      <div class="error">
      <button class="overlay__close-button overlay__close-button_small"></button>
      <div class="error__content">
        <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L92 92" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
          <path d="M2 92L92 2" stroke="#D80101" stroke-width="3" stroke-linecap="round" />
        </svg>
        <p class="error__text">${message.toString().includes('Ошибка') ? message : 'Что-то пошло не так'}</p>
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

  const header = document.createElement('h2');
  header.classList.add('title', 'form-aritcle__title');
  header.textContent = data ? 'Изменить товар' : 'Добавить товар';

  const hr = document.createElement('hr');

  const form = document.createElement('form');
  form.action = 'https://jsonplaceholder.typicode.com/posts';
  form.method = 'post';

  form.innerHTML = `
      <fieldset class="add-form__fieldset">
      <div class="add-form__field add-form__field_title">
        <label class="add-form__label" for="title">Наименование</label>
        <input class="add-form__input" type="text" name="title" id="title" ${data ? `value="${data.title}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_category">
        <label class="add-form__label" for="category">Категория</label>
        <input class="add-form__input" type="text" name="category" id="category" ${data ? `value="${data.category}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_units">
        <label class="add-form__label" for="units">Единицы измерения</label>
        <input class="add-form__input" type="text" name="units" id="units" ${data ? `value="${data.units}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_discount">
        <label class="add-form__label" for="discount">Дисконт</label>
        <div class="checkbox">
          <input class="add-form__checkbox" type="checkbox" ${data && data.discount ? 'checked' : ''}>
          <input class="add-form__input" type="number" name="discount" id="discount" ${data && data.discount ? `value="${data.discount}"` : ''} ${data && data.discount ? '' : 'disabled'}>
        </div>
      </div>

      <div class="add-form__field add-form__field_description">
        <label class="add-form__label" for="description">Описание</label>
        <textarea class="add-form__textarea" name="description" id="description" required>${data ? data.description : ''}</textarea>
      </div>

      <div class="add-form__field add-form__field_count">
        <label class="add-form__label" for="count">Количество</label>
        <input class="add-form__input" type="number" name="count" id="count" ${data ? `value="${data.count}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_price">
        <label class="add-form__label" for="price">Цена</label>
        <input class="add-form__input" type="number" name="price" id="price" ${data ? `value="${data.price}"` : ''} required>
      </div>

      <div class="add-form__field add-form__field_img">
        <label class="add-form__button-label button button_small" for="img">Добавить изображение</label>
        <input class="add-form__file" type="file" name="img" accept=".jpg, .jpeg, .png" id="img">
      </div>
    </fieldset>

    <div class="add-form__final">
      <div class="total">
        Итоговая стоимость: <span class="total__price">$&nbsp;${(data ? data.count * data.price : 0).toFixed(2)}</span>
      </div>
      <button class="button" type="submit">Добавить товар</button>
    </div>
  `;

  const discountCheckbox = form.querySelector('.add-form__checkbox');
  const discountInput = form.querySelector('.checkbox > .add-form__input');

  overlay.append(formWrapper);
  formWrapper.append(close, header, hr, form);

  document.body.append(overlay);
  overlayControl(overlay, close);
  formControl(form, overlay, list);
  discountCheckboxControl(discountCheckbox, discountInput);
};