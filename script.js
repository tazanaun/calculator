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

let num1 = "";
let operator;
let num2 = "";

function operate(operate, num1, num2) {
	if (operate == "+") add(num1, num2);
	else if (operate == "-") subtract(num1, num2);
	else if (operate == "*") multiply(num1, num2);
	else if (operate == "/") divide(num1, num2);
}

function createButtons() {
	const numPad = document.querySelector(".num-pad");
	let count = 9;
	for (let i = 0; i < 4; i++) {
		const newRow = document.createElement("div");
		newRow.className = `row-${i}`;
		const operators = ["+", "-", "*", "/"];
		for (let j = 0; j < 4; j++) {
			const newButton = document.createElement("button");
			if (j == 0) {
				newButton.textContent = operators[i];
				newButton.className = `btn-operator`;
			} else if (i == 3) {
				if (count == 0) {
					newButton.textContent = count;
					newButton.className = `btn-digit`;
				} else if (count == -1) {
					newButton.textContent = "C";
					newButton.className = `btn-clear`;
				} else if (count == -2) {
					newButton.textContent = "=";
					newButton.className = "btn-operator";
				}
				count--;
			} else {
				newButton.textContent = count;
				newButton.className = `btn-digit`;

				count--;
			}
			newButton.style.fontSize = "xx-large";
			newButton.style.width = "50px";
			newRow.appendChild(newButton);
		}
		numPad.appendChild(newRow);
	}
}

createButtons();

const digit = document.getElementsByClassName("btn-digit");
for (let i = 0; i < digit.length; i++) {
	digit[i].addEventListener("click", (event) => {
		num1 = num1 + event.target.textContent;
	});
}
