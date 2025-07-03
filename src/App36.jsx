import React from "react";
import { Form } from "react-bootstrap";

function MyComp1() {
  return (
    <div>
      <Form.Check type="switch" />
    </div>
  );
}

function App36(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App36;
