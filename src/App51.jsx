import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Button } from "react-bootstrap";

// 연습
// 각 버튼 클릭 시
function MyLayout() {
  return (
    <div>
      <div>
        {/* / 로 이동*/}
        <Button variant="outline-info">HOME</Button>

        {/* /qwe 로 이동*/}
        <Button variant="outline-info">QWE</Button>

        {/* /asd 로 이동*/}
        <Button variant="outline-info">ASD</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App51(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route
              index
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />
            <Route
              path="qwe"
              element={
                <div>
                  <h3>QWE</h3>
                </div>
              }
            />
            <Route
              path="asd"
              element={
                <div>
                  <h3>ASD</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App51;
