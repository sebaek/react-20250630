import React, { useState } from "react";

function MyComp1() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(10);

  console.log(number1, number2);

  return (
    <div>
      {/*div*2>div+button*/}
      <div>
        <div>{number1}</div>
        <button onClick={() => setNumber1(number1 + 1)}>버튼1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setNumber2(number2 - 1)}>버튼2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  // 연습
  // 각 인풋에 입력한 값으로 변경되도록 코드 작성
  return (
    <div>
      {/*div*2>input[value=""]*/}
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

function App26(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App26;
