import React, { useEffect } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지 않도록 코드 수정

// /react/install
// /react/game
// /react/state

function ReactComponent() {
  useEffect(() => {
    //
    console.log("마운트 때 실행 코드");

    return () => {
      console.log("언마운트 때 실행되는 코드");
    };
  }, []);

  return (
    <div className="d-flex gap-3">
      <div className="w-25 bg-body-tertiary p-1">
        <div>
          <Link to="/react/install">인스톨</Link>
        </div>
        <div>
          <Link to="/react/game">게임</Link>
        </div>
        <div>
          <Link to="/react/state">상태</Link>
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
