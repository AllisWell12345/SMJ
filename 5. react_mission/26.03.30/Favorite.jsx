import React, { useState } from "react";

function Favorite() {
  const [ColorSelectedValue, setColorSelectedValue] = useState("");
  const [FruitSelectedValue, setFruitSelectedValue] = useState("");

  const handleSelectChange1 = (e) => {
    setColorSelectedValue(e.target.value);
  };
  const handleSelectChange2 = (e) => {
    setFruitSelectedValue(e.target.value);
  };

  return (
    <>
      좋아하는 색상: {""}
      <select value={ColorSelectedValue} onChange={handleSelectChange1}>
        <option>색상을 선택하세요.</option>
        <option value="blue">파란색</option>
        <option value="red">빨간색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>
      <br />
      좋아하는 과일: {""}
      <select value={FruitSelectedValue} onChange={handleSelectChange2}>
        <option>과일을 선택하세요.</option>
        <option value="apple">🍎사과</option>
        <option value="banana">🍌바나나</option>
        <option value="orange">🍊오렌지</option>
        <option value="grape">🍇포도</option>
      </select>
      <br />
      선택한 색상: {ColorSelectedValue}
      <br />
      선택한 과일: {FruitSelectedValue}
    </>
  );
}

export default Favorite;
