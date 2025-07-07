import React from "react";
import axios from "axios";

function App55(props) {
  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  // 연습 : 3번 클릭시 put /api/main30/sub3 요청 보내기
  //       4번 클릭시 delete /api/main30/sub4 요청 보내기

  // spring : put /api/main30/sub3 받는 request handler method
  //          delete /api/main30/sub4 받는 request handler method
  return (
    <div>
      <button onClick={handleButton2Click}>2 delete 요청</button>
      <hr />
      <button onClick={handleButton1Click}>1 put 요청</button>
    </div>
  );
}

export default App55;
