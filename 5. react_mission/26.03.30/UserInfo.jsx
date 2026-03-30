import React, { useId, useState } from "react";

function UserInfo() {
  const [user, setUser] = useState({
    userId: "",
    userAge: "",
    userEmail: "",
  });

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form>
        이름: {""}
        <input
          type="text"
          name="userId"
          value={user.userId}
          onChange={handleUserChange}
        />
        <br />
        나이: {""}
        <input
          type="number"
          name="userAge"
          value={user.userAge}
          onChange={handleUserChange}
        />
        <br />
        이메일: {""}
        <input
          type="text"
          name="userEmail"
          value={user.userEmail}
          onChange={handleUserChange}
        />
      </form>

      <h2>프로필</h2>
      <h5>
        {user.userId} ({user.userAge})세 <br />
        📧 {user.userEmail}
      </h5>
    </>
  );
}

export default UserInfo;
