function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b != 0) return a / b;
}

let num1;
let operator;
let num2;

function operate(operate, num1, num2) {
	if (operate == "+") add(num1, num2);
	else if (operate == "-") subtract(num1, num2);
	else if (operate == "*") multiply(num1, num2);
	else if (operate == "/") divide(num1, num2);
}

function createButtons() {
	const numPad = document.querySelector(".num-pad");
	let count = 9;
	for (let i = 0; i < 3; i++) {
		const newRow = document.createElement("div");
		newRow.className = `row-${i}`;
		for (let j = 0; j < 3; j++) {
			const newButton = document.createElement("button");
			newButton.textContent = count;
			newButton.style.fontSize = "xx-large";
			newButton.style.width = "50px";
			newRow.appendChild(newButton);
			count--;
		}
		numPad.appendChild(newRow);
	}
}
createButtons();
