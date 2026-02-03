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

let numBuilder = "";
let num1 = "";
let operator = false;
let num2 = "";

function operate(operate, num1, num2) {
	if (operate == "+") console.log(add(num1, num2));
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
					newButton.id = `btn-clear`;
				} else if (count == -2) {
					newButton.textContent = "=";
					newButton.id = "btn-equal";
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

function updateScreen(num) {
	screen = document.querySelector("#screen-text");
	screen.textContent = num;
}

createButtons();

const buttons = document.querySelector(".num-pad");

buttons.addEventListener("click", (event) => {
	buttonTypePressed = event.target.className;
	console.log(buttonTypePressed);
	if (buttonTypePressed == "btn-digit") {
		numBuilder = numBuilder + event.target.textContent;
		updateScreen(numBuilder);
	} else if (buttonTypePressed === "btn-equal") {
	} else if (buttonTypePressed === "btn-operator") {
	} else if (buttonTypePressed === "btn-clear") {
	}
});
