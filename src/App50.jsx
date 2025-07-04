import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

function MainLayout() {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          <Link to="/abc">abc</Link>
        </div>
        <div>
          <Link to="/xyz">xyz</Link>
        </div>
        <div>
          <Link to="/qwe">qwe</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App50(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="abc"
              element={
                <div>
                  <h3>abc</h3>
                </div>
              }
            />
            <Route
              path="xyz"
              element={
                <div>
                  <h3>xyz</h3>
                </div>
              }
            />
            <Route
              path="qwe"
              element={
                <div>
                  <h3>qwe</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App50;
