const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

// Відновлення з localStorage
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    formData = JSON.parse(saved);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (e) {
    console.error('Error parsing saved form data:', e);
  }
}

// Слухач input
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Слухач submit
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});