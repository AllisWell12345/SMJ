import React, { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkMemory, setCheckMemory] = useState(false);

  const handleLogin = () => {
    alert(
      `로그인 시도!\n사용자: ${user}\n기억하기: ${checkMemory ? "예" : "아니요"}`,
    );

    setUser("");
    setPwd("");
    setCheckMemory(false);
  };

  return (
    <>
      사용자명:{" "}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      비밀번호:{" "}
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        id="chk"
        checked={checkMemory}
        onChange={(e) => setCheckMemory(e.target.checked)}
      />
      <label htmlFor="chk">로그인 상태 유지</label>
      <br />
      <button onClick={handleLogin}>로그인</button>
    </>
  );
}

export default LoginForm;
