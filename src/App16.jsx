import { Button } from "react-bootstrap";

function App16() {
  return (
    <>
      <button className="btn btn-primary">저장</button>
      <Button>등록</Button>
      <Button variant="warning">워닝</Button>
      <Button variant="danger">위험</Button>
      <Button>버튼 </Button>
      <hr />
      {/*  연습  다양한 variant props 값으로 버튼들 만들어 보기 */}
    </>
  );
}

export default App16;
