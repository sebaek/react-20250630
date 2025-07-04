import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지 않도록 코드 수정

// /react/install
// /react/game
// /react/state

function ReactComponent() {
  return (
    <div className="d-flex gap-3">
      <div className="w-25 bg-body-tertiary p-1">
        <div>
          <a href="/react/install">인스톨</a>
        </div>
        <div>
          <a href="/react/game">게임</a>
        </div>
        <div>
          <a href="/react/state">상태</a>
        </div>
      </div>
      <div className="flex-grow-1 bg-primary-subtle">
        <Outlet />
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactComponent />}>
            <Route
              path="install"
              element={
                <div>
                  <h3>설치 방법</h3>
                </div>
              }
            />
            <Route
              path="game"
              element={
                <div>
                  <h3>게임 만들기</h3>
                </div>
              }
            />
            <Route
              path="state"
              element={
                <div>
                  <h3>상태란 무엇인가?</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;
