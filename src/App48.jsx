import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react">
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
