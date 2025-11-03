const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = formElem.elements;
  if (!email.value.trim() || !password.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }
  const userData = {
    email: formElem.elements.email.value.trim(),
    password: formElem.elements.password.value.trim(),
  };

  console.log(userData);
  formElem.reset();
});
