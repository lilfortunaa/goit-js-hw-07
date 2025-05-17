const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
button.addEventListener('click', handleClick);
function handleClick() {
  let hex = getRandomHexColor();
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
