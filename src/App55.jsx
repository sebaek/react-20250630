import React, { useState } from "react";
import axios from "axios";

function App55(props) {
  const [myFile, setMyFile] = useState([]);

  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  // 연습 : 3번 클릭시 put /api/main30/sub3 요청 보내기
  //       4번 클릭시 delete /api/main30/sub4 요청 보내기

  // spring : put /api/main30/sub3 받는 request handler method
  function handleButton4Click() {
    axios.delete("/api/main30/sub4");
  }

  function handleButton3Click() {
    axios.put("/api/main30/sub3");
  }

  function handleButton5Click() {
    axios.put("/api/main30/sub5", {
      nickName: "트럼프",
      age: 77,
      married: true,
      team: {
        location: "ny",
        country: "korea",
      },
      address: ["seoul", "busan", "jeju"],
    });
  }

  function handleButton6Click() {
    axios.delete("/api/main30/sub6", {
      params: {
        name: "son",
        id: 77,
      },
    });
  }

  // 연습 : spring delete /api/main30/sub6 으로 오는 요청
  // request parameter 받아서 출력하는 코드 완성

  function handleButton7Click() {
    // file 전송시 postForm 또는 putForm
    axios.postForm("/api/main30/sub7", {
      name: "흥민",
      age: 77,
      myFile: myFile,
    });
  }

  return (
    <div>
      <div>
        <input
          type="file"
          value={myFile}
          onChange={(e) => setMyFile(e.target.value)}
        />
        <hr />
        <button onClick={handleButton7Click}>7 post w/ file</button>
      </div>
      <button onClick={handleButton6Click}>6 delete w/ data</button>
      <hr />
      <button onClick={handleButton5Click}>5 put w/ data</button>
      <hr />
      <button onClick={handleButton4Click}>4 delete</button>
      <hr />
      <button onClick={handleButton3Click}>3 put</button>
      <hr />
      <button onClick={handleButton2Click}>2 delete 요청</button>
      <hr />
      <button onClick={handleButton1Click}>1 put 요청</button>
    </div>
  );
}

export default App55;
