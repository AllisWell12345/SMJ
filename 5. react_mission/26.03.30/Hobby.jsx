import React, { useState } from "react";

function Hobby() {
  const [CheckStudy, setCheckStudy] = useState(false);
  const [CheckMusic, setCheckMusic] = useState(false);
  const [CheckSports, setCheckSports] = useState(false);
  const [CheckCoding, setCheckCoding] = useState(false);

  const selectedList = [
    CheckStudy && "study",
    CheckMusic && "music",
    CheckSports && "sports",
    CheckCoding && "coding",
  ].filter((item) => item);

  return (
    <>
      <h3>취미 선택</h3>
      <input
        type="checkbox"
        id="chk"
        onChange={(e) => setCheckStudy(e.target.checked)}
      />
      <label htmlFor="chk">📚독서</label> <br />
      <input
        type="checkbox"
        id="chk"
        onChange={(e) => setCheckMusic(e.target.checked)}
      />
      <label htmlFor="chk">🎵음악</label> <br />
      <input
        type="checkbox"
        id="chk"
        onChange={(e) => setCheckSports(e.target.checked)}
      />
      <label htmlFor="chk">🏋️운동</label> <br />
      <input
        type="checkbox"
        id="chk"
        onChange={(e) => setCheckCoding(e.target.checked)}
      />
      <label htmlFor="chk">💻코딩</label>
      <hr />
      <h5>선택된 취미</h5>
      <p>{selectedList.join(", ")}</p>
    </>
  );
}

export default Hobby;
