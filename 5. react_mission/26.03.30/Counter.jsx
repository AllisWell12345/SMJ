import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleDecrease = () => {
    setNumber((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={() => setNumber(0)}>초기화</button>
      <button onClick={handleIncrease}>+1</button>
    </>
  );
}

export default Counter;
