import React, { useState } from "react";

function MyComp1() {
  // use... : 훅(hook)
  // react는 훅의 사용을 순서로 기억함
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("son");

  // 따라서 use...(hook) 사용시
  // 1. 조건 절에 넣으면 안됨
  // 2. 반복문에 넣으면 안됨()
  // 3. 안전하게 컴포넌트 코드 상위에 순서대로 작성할 것
  if (true) {
    const [message, setMessage] = useState("");
  }
  for (let i = 0; i < 3; i++) {
    const [other, setOther] = useState("");
  }

  let a = 3 + 5; // 훅 중간에 다른 코드 쓰지 말기

  const [alert, setAlert] = useState("");

  return null;
}

function App28(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App28;
