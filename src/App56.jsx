import React, { useState } from "react";
import axios from "axios";

function App56(props) {
  const [myFiles, setMyFiles] = useState(null);

  function handleButton1Click() {
    // file 전송시 postForm/putForm
    axios.postForm("/api/main31/sub1", {
      name: "흥민",
      age: 77,
      myFiles: myFiles,
    });
  }

  return (
    <div>
      <div>
        {/* file은 e.target.files */}
        <input type="file" onChange={(e) => setMyFiles(e.target.files)} />
        <button onClick={handleButton1Click}>파일 전송 1</button>
      </div>
    </div>
  );
}

export default App56;
