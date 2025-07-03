import throttle from 'lodash.throttle'; 

const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const { email, message } = form.elements;

// 🔁 ЗМІНИЛИ ЦЕЙ РЯДОК:
form.addEventListener("input", throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

// Відновлення з локального сховища
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  email.value = formData.email || "";
  message.value = formData.message || "";
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}