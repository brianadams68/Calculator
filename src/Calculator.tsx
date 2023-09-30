import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "+/-") {
      setExpression((prevExpression) =>
        prevExpression.startsWith("-") ? prevExpression.slice(1) : "-" + prevExpression
      );
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };
  

  const clearExpression = () => {
    setExpression("");
  };

  const calculateResult = () => {
    try {
      const result = evaluate(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="buttons">
        <button onClick={clearExpression} className="clear">
          AC
        </button>
        <button onClick={() => handleButtonClick("+/-")}>+/-</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")} className="operator">
          ÷
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")} className="operator">
          -
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")} className="operator">
          *
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={calculateResult} className="operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
