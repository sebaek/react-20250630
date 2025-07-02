import React, { useState } from "react";

function MyComp1(props) {
  const [text, setText] = useState("기본 값");

  function handleInputChange(e) {
    console.log(e.target.value);
    // setText("다른 값");
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function App25(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App25;
