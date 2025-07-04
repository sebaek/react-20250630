import React, { useEffect } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  useEffect(() => {
    // 마운트 될 때 실행되는 코드
    console.log("ReactLayout 컴포넌트 마운트 됨");
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          {/* 전체 페이지를 다시 마운트 하지 않으려면 a 태그 대신
            react router의 Link 컴포넌트 사용 */}
          <Link to="/react/learn">LEARN</Link>
        </div>
        <div>
          <Link to="/react/tutorial">TUTORIAL</Link>
        </div>
        <div>
          <Link to="/react/docs">DOCS</Link>
        </div>
        <div>
          <Link to="/react/api">API</Link>
        </div>
      </div>
      {/*자식 경로의 컴포넌트가 출력되는 곳*/}
      <Outlet></Outlet>
    </div>
  );
}

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactLayout />}>
            <Route
              path="learn"
              element={
                <div>
                  <h3>LEARN 화면</h3>
                </div>
              }
            />
            <Route
              path="tutorial"
              element={
                <div>
                  <h3>TUTORIAL 화면</h3>
                </div>
              }
            />
            <Route
              path="docs"
              element={
                <div>
                  <h3>DOCS 화면</h3>
                </div>
              }
            />
            <Route
              path="api"
              element={
                <div>
                  <h3>API 화면</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App48;
