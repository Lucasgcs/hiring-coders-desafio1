const form = document.querySelector('form');
const input = document.querySelector('#email');

function handleSubmit(e) {
  e.preventDefault();

  localStorage.setItem('email', input.value);
  console.log(input.value);
}

form.addEventListener('submit', handleSubmit);