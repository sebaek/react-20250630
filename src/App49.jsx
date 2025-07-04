import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import "./assets/mystyle.css";

// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지 않도록 코드 수정
// 연습 : 현재 경로와 Link의 to prop이 같으면 그려지는 a 요소에 active class 추가하기

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
          <NavLink to="/react/install">인스톨</NavLink>
        </div>
        <div>
          <NavLink to="/react/game">게임</NavLink>
        </div>
        <div>
          <NavLink to="/react/state">상태</NavLink>
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
