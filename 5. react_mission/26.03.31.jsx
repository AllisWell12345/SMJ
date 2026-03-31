import { useState, useEffect } from "react";

function Alert() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [start] = useState(Date.now());

  useEffect(() => {
    const data = prompt("문자열을 입력해주세요");
    setText1(data);
  }, []);

  const timeCheck = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      value === text1 && alert(Date.now() - start);
    }
  };

  return (
    <div>
      <h2>{text1}</h2>
      <input
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        onKeyDown={timeCheck}
      />
    </div>
  );
}

export default Alert;
