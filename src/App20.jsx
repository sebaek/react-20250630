import React from "react";
import { Button } from "react-bootstrap";
import * as PropTypes from "prop-types";

function AwesomeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        fontSize: "2rem",
      }}
    >
      {children}
    </button>
  );
}

function AwesomeHeader({ children, onDoubleClick }) {
  return (
    <h1
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "2rem",
        backgroundColor: "red",
        color: "skyblue",
      }}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </h1>
  );
}

function App20(props) {
  const handleAwesomeHeaderDoubleClick1 = () => {
    console.log("제목 더블 클릭됨!!!!!!");
  };
  const handleAwesomeHeaderDoubleClick2 = () => {
    console.log("제목 더블 클릭됨@@@@@@");
  };
  return (
    <div>
      {/*연습 : AwesomeHeader 를 만들고 마우스가 더블클릭하면 콘솔에 메시지 출력*/}
      {/* <h1 style={적절한 스타일 주기}></h1>*/}
      <AwesomeHeader onDoubleClick={handleAwesomeHeaderDoubleClick1}>
        내가 만든 제목1111
      </AwesomeHeader>
      <AwesomeHeader onDoubleClick={handleAwesomeHeaderDoubleClick2}>
        내가 만든 제목2222
      </AwesomeHeader>

      <button onClick={() => console.log("보통의 버튼 클릭")}>
        브라우저 컴포넌트 버튼
      </button>
      <AwesomeButton onClick={() => console.log("멋진버튼1 클릭")}>
        멋진버튼1
      </AwesomeButton>
      <Button
        variant="outline-danger"
        onClick={() => console.log("부트스트랩 버튼 클릭")}
      >
        부트스트랩 버튼
      </Button>
    </div>
  );
}

export default App20;
