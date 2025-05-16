const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const cutedValue = input.value.trim();
  output.textContent = cutedValue === '' ? 'Anonymous' : cutedValue;
});
