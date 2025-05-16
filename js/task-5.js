const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
button.addEventListener('click', handleClick);
function handleClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.style.backgroundColor = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
