import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router";

function Child1() {
  // react router :경로 -> dynamic segments
  let param = useParams(); // dynamic segments를 얻는 hook

  console.log(param);

  return (
    <div>
      <h3>{param.mySubPath}번 게시물 보기</h3>
    </div>
  );
}

function App45(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route path=":mySubPath" element={<Child1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App45;
