function MyComp1(param) {
  console.log(param);
  console.log(param.color);
  const color = param.color;

  console.log("컬러변수", color);
  return null;
}

function MyComp2(param) {
  // const address = param.address;
  const { address } = param;
  console.log("주소", address);
  return null;
}

// {address: "뉴욕"}를 분해 할당
function MyComp3({ address }) {
  console.log("주소3", address);
  return null;
}

function App6() {
  return (
    <>
      <MyComp1 color="yellow" />
      {/*  MyComp1({color:"yellow"}) */}
      <MyComp1 color="red" />
      <MyComp2 address="seoul" />
      <MyComp2 address="jeju" />
      {/*  MyComp2({address: "seoul" })*/}
      <MyComp3 address="뉴욕" />
      <MyComp3 address="시카고" />
      <MyComp4 city="서울" />
      <MyComp4 city="워싱턴" />
      {/*  MyComp4 함수 작성 w/ 분해 할당으로 props 받기 -> 로그 출력*/}
    </>
  );
}

export default App6;
