const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === "") return;
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return; // prevent double operator
  display.value += op;
}

function appendDot() {
  const lastNum = display.value.split(/[\+\-\*\/]/).pop();
  if (!lastNum.includes(".")) display.value += ".";
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
