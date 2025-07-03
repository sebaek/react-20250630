import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({ name: "", address: "" });

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={person.address}
            onChange={(e) => setPerson({ ...person, address: e.target.value })}
          />
        </div>
      </div>
      <div>
        <div>
          <p>이름 : {person.name}</p>
        </div>
        <div>
          <p>주소 : {person.address}</p>
        </div>
      </div>
    </div>
  );
}

function MyInput() {
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}

function MyOutput() {
  return (
    <div>
      <p>이름 : </p>
      <p>주소 : </p>
    </div>
  );
}

function MyComp2() {
  return (
    <div>
      <MyInput />
      <MyOutput />
    </div>
  );
}

function App34(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App34;
