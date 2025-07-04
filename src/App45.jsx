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

// 연습 : dynamic segments 사용해서 아래 경로에 해당 컴포넌트 출력하기

// /java/collection : <h3>collection 배우기</h3>
// /java/io : <h3>io 배우기</h3>
// /java/stream : <h3>stream 배우기</h3>
// /java/class : <h3>class 배우기</h3>

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
