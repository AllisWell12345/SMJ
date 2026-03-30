import React, { useState } from "react";

function ToggleSwitch() {
  const [ContentChecked, setContentChecked] = useState(false);
  const [DarkmodeChecked, setDarkmodeChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="chk"
        checked={ContentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label htmlFor="chk">콘텐츠 표시: </label>
      {ContentChecked ? "켜짐" : "꺼짐"}
      <br />

      <input
        type="checkbox"
        id="chk"
        checked={DarkmodeChecked}
        onChange={(e) => setDarkmodeChecked(e.target.checked)}
      />
      <label htmlFor="chk">다크모드: </label>
      {DarkmodeChecked ? "🌙" : "🌕"}
      {ContentChecked && <p> 🎉 이 메세지는 조건부로 표시됩니다!</p>}
    </>
  );
}

export default ToggleSwitch;
