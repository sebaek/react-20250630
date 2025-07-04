import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// 연습 : 아래 경로에 따라 해당 컴포넌트 출력하기

// /learn : <h3>웹앱 개발 배우기</h3>
// /learn/react : <h3>리액트 배우기</h3>
// /learn/spring : <h3>스프링 배우기</h3>
// /learn/java/collection : <h3>자바 콜렉션 배우기</h3>

// /learn : <h3>자바 배우기</h3>

function App44(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route index element={<h3>웹앱 배우기 </h3>} />
            <Route path="react" element={<h3>react 배우기 </h3>} />
            <Route path="spring" element={<h3>spring 배우기 </h3>} />
            <Route path="java">
              <Route
                path="collection"
                element={<h3>java collection 배우기 </h3>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App44;
