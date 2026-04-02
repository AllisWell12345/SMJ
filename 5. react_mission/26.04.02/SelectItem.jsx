import React, { useState } from "react";

function SelectItem() {
  const [fruit, setFruit] = useState("");

  return (
    <>
      {["사과", "바나나", "오렌지", "포도", "딸기"].map((fruit) => (
        <button key={fruit} onClick={() => setFruit(fruit)}>
          {fruit}
        </button>
      ))}

      <p>
        선택한 과일: {fruit} <br />
        🎉{fruit}를 선택하셨습니다!
      </p>
    </>
  );
}

export default SelectItem;
