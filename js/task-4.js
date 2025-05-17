const registrationForm = document.querySelector('.login-form');
registrationForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target.elements;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === '' || password === '') {
    alert(`All form fields must be filled in`);
    return;
  }
  const info = {
    email: form.email.value,
    password: form.password.value,
  };

  console.log(info);
  event.target.reset();
}
