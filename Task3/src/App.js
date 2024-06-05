import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BackspaceIcon from '@mui/icons-material/Backspace';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const calculateResult = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return NaN;
    }
  };

  const handleClick = (value) => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      setOperator(value);
      setFirstOperand(parseFloat(display));
      setDisplay('');
      // Append the operand to the history
      setHistory(`${display} ${value}`);
    } else if (value === '=') {
      const secondOperand = parseFloat(display);
      const result = calculateResult(firstOperand, secondOperand, operator);
      setDisplay(result.toString()); // Set the display directly with the result
      setHistory('');
      setFirstOperand(null);
      setOperator(null);
    } else if (value === 'CE') {
      // Clear the last entry
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else if (value === 'C') {
      // Clear everything
      setDisplay('');
      setHistory('');
      setFirstOperand(null);
      setOperator(null);
    } else if (value === '<') {
      setDisplay(display.slice(0, -1));
    } else if (value === '+/-') {
      // Toggle the sign of the number
      setDisplay((prevDisplay) => {
        if (prevDisplay.startsWith('-')) {
          return prevDisplay.slice(1);
        } else {
          return '-' + prevDisplay;
        }
      });
    } else if (value === '1/') {
      // Calculate reciprocal
      const number = parseFloat(display);
      if (number !== 0) {
        const reciprocal = 1 / number;
        setDisplay(reciprocal.toString());
        setHistory(`1/${number} = ${reciprocal}`);
      } else {
        setDisplay('Error: Division by zero');
      }
    } else if (value === '^2') {
      // Calculate square
      const number = parseFloat(display);
      const square = Math.pow(number, 2);
      setDisplay(square.toString());
      setHistory(`${number}^2 = ${square}`);
    } else if (value === '√') {
      // Calculate square root
      const number = parseFloat(display);
      if (number >= 0) {
        const squareRoot = Math.sqrt(number);
        setDisplay(squareRoot.toString());
        setHistory(`√${number} = ${squareRoot}`);
      } else {
        setDisplay('Error: Invalid input');
      }
    } else if (value === '%') {
      // Calculate percentage
      const number = parseFloat(display);
      const percentage = number / 100;
      setDisplay(percentage.toString());
      setHistory(`${number}% = ${percentage}`);
    } else {
      // Update display when entering a number
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="history">{history}</div>
      <input type="text" value={display} readOnly />
      <div className="key-grid">
        {/* Buttons for the first row */}
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('CE')}>CE</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('<')}><BackspaceIcon /></button>
        {/* Buttons for the second row */}
        <button onClick={() => handleClick('1/')}>1/x</button>
        <button onClick={() => handleClick('^2')}>x²</button>
        <button onClick={() => handleClick('√')}>√x</button>
        <button onClick={() => handleClick('/')}>÷</button>
        {/* Buttons for the third row */}
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>x</button>
        {/* Buttons for the fourth row */}
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        {/* Buttons for the fifth row */}
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        {/* Buttons for the last row */}
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
