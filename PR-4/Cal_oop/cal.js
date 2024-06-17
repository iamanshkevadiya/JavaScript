class Calculator {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.clear();
    }

    clear() {
        this.display = '';
        this.currentOperation = null;
        this.operand1 = '';
        this.operand2 = '';
        this.updateDisplay();
    }

    appendNumber(number) {
        if (this.currentOperation) {
            this.operand2 += number;
        } else {
            this.operand1 += number;
        }
        this.display += number;
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.operand1 === '') return;
        if (this.currentOperation) this.compute();
        this.currentOperation = operation;
        this.display += ` ${operation} `;
        this.updateDisplay();
    }

    compute() {
        let computation;
        const a = parseFloat(this.operand1);
        const b = parseFloat(this.operand2);

        switch (this.currentOperation) {
            case '+':
                computation = a + b;
                break;
            case '-':
                computation = a - b;
                break;
            case '*':
                computation = a * b;
                break;
            case '/':
                computation = a / b;
                break;
            default:
                return;
        }

        this.display = computation.toString();
        this.operand1 = computation;
        this.operand2 = '';
        this.currentOperation = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.value = this.display;
    }

    handleButtonClick(value) {
        if (!isNaN(value) || value === '.') {
            this.appendNumber(value);
        } else if (value === 'C') {
            this.clear();
        } else if (value === '=') {
            this.compute();
        } else {
            this.chooseOperation(value);
        }
    }
}

const calculator = new Calculator();

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        calculator.handleButtonClick(button.getAttribute('data-value'));
    });
});
