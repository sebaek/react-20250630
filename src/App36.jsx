import React, { useState } from "react";
import { Form } from "react-bootstrap";

function MyComp1() {
  const [checked, setChecked] = useState(false);

  console.log(checked);
  return (
    <div>
      <Form.Check
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
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
