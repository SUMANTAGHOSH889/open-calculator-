
let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if (display.innerText === '0') currentInput = '';
  currentInput += num;
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  currentInput += op;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    display.innerText = '0';
  } else {
    display.innerText = currentInput;
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch (e) {
    display.innerText = 'Error';
    currentInput = '';
  }
}
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // avoid form submission if any
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'delete') {
    clearDisplay();
  }
});