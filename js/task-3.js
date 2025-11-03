const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

function inputChange(event) {
  const inputValue = event.target.value;
  if (inputValue.length === 0 || inputValue.trim().length === 0) {
    return (outputElem.textContent = 'Anonymous');
  }
  outputElem.textContent = inputValue.trim();
}

inputElem.addEventListener('input', inputChange);
