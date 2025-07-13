const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

// При завантаженні сторінки — відновлюємо збережені дані
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Слухач input — оновлюємо formData та сховище
form.addEventListener('input', ({ target }) => {
  const { name, value } = target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Слухач submit — перевірка, чистка та логування
form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});