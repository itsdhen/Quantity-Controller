const decreasebtn = document.getElementById("decreasebtn");
const result = document.getElementById("result");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");

let currentNumber = 0;
decreasebtn.onclick = function () {
  currentNumber--;
  result.textContent = currentNumber;
};
increasebtn.onclick = function () {
  currentNumber++;
  result.textContent = currentNumber;
};
resetbtn.onclick = function () {
  currentNumber = 0;
  result.textContent = currentNumber;
};
