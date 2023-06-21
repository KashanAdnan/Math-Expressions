const sum = () => {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let result = document.getElementById("result");
  const newNum = num1 + num2;
  result.innerHTML = `${num1} + ${num2} =  ${newNum} `;
};

const minus = () => {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let result = document.getElementById("result");
  const newNum = num1 - num2;
  result.innerHTML = `${num1} - ${num2} =  ${newNum} `;
};

const divide = () => {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let result = document.getElementById("result");
  const newNum = num1 / num2;
  result.innerHTML = `${num1} ÷ ${num2} =  ${newNum} `;
};

const multiply = () => {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let result = document.getElementById("result");
  const newNum = num1 * num2;
  result.innerHTML = `${num1} %num2} =  ${newNum} `;
};

const modules = () => {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let result = document.getElementById("result");
  const newNum = num1 % num2;
  result.innerHTML = `${num1} % ${num2} =  ${newNum}`;
};
