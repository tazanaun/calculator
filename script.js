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
	else {
		alert("Cannot Divide by Zero");
		return 0;
	}
}

let numBuilder = "";
let num1 = 0;
let operator = false;
let num2 = 0;

function operate(operate, num1, num2) {
	if (operate == "+") return add(num1, num2);
	else if (operate == "-") return subtract(num1, num2);
	else if (operate == "*") return multiply(num1, num2);
	else if (operate == "/") return divide(num1, num2);
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
					newButton.className = "btn-equal";
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

function clearState() {
	numBuilder = "";
	updateScreen("0");
	num1 = 0;
	num2 = 0;
	operator = false;
}

createButtons();

const buttons = document.querySelector(".num-pad");

buttons.addEventListener("click", (event) => {
	buttonTypePressed = event.target.className;

	if (buttonTypePressed == "btn-digit") {
		numBuilder = numBuilder + event.target.textContent;
		updateScreen(numBuilder);
	} else if (buttonTypePressed === "btn-operator") {
		if (num1 == 0) num1 = Number(numBuilder);
		else {
			num2 = Number(numBuilder);
			num1 = operate(operator, num1, num2);
		}
		updateScreen(num1);
		operator = event.target.textContent;
		num2 = 0;
		numBuilder = "";
	} else if (buttonTypePressed === "btn-equal") {
		if (num1 == 0) num1 = Number(numBuilder);
		else num2 = Number(numBuilder);
		if (operator) {
			num1 = operate(operator, num1, num2);
			num2 = 0;
		} else {
			clearState();
		}

		updateScreen(num1);
	} else if (buttonTypePressed === "btn-clear") {
		clearState();
	}
});
