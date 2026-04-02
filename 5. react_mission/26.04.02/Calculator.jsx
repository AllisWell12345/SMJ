import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      숫자1:{" "}
      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
      <br />
      숫자2:{" "}
      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
      <p>
        덧셈: {num1} + {num2} = {num1 + num2} <br />
        뺄셈: {num1} - {num2} = {num1 - num2} <br />
        곱셈: {num1} × {num2} = {(num1 * num2).toFixed(2)} <br />
        나눗셈: {num1} ÷ {num2} = {num2 === 0 ? 0 : (num1 / num2).toFixed(2)}
      </p>
    </>
  );
}

export default Calculator;
