import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  function handl3Button4Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub3",
    });
  }

  function handleButton5Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub4",
    });
  }

  function handleButton6Click() {
    // axios.request({
    //   method: "get",
    //   url: "/api/main28/sub6",
    // });
    axios.get("/api/main28/sub6");
  }

  function handleButton7Click() {
    axios.get("/api/main28/sub7");
  }

  function handleButton8Click() {
    // get 방식으로 데이터 보낼 때 query string 사용
    axios.get("/api/main28/sub8?name=son&age=33");
  }

  function handleButton9Click() {
    axios.get("/api/main28/sub9?address=seoul&score=88.12");
  }

  function handleButton10Click() {
    // query string 직접 완성
    axios.get("/api/main28/sub10?address=서울 강남&score=88.12");
  }

  function handleButton11Click() {
    // config의 params에 객체를 넣는 방법
    axios.get("/api/main28/sub11", {
      params: { address: "서울 신촌", score: "77.77" },
    });
  }

  function handleButton12Click() {
    axios.get("/api/main28/sub12", {
      params: {
        fruit: "apple",
        price: 5000,
      },
    });
  }

  function handleButton13Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("name", "흥민");
    searchParams.set("age", "33");
    searchParams.set("address", "서울 강남");

    axios.get("/api/main28/sub13", {
      params: searchParams,
    });
  }

  function handleButton14Click() {
    const p = new URLSearchParams();
    p.set("city", "london");
    p.set("country", "korea");
    p.set("id", 99);
    axios.get("/api/main28/sub14", {
      params: p,
    });
  }

  function handleButton15Click() {
    const p = new URLSearchParams();
    p.set("name", "hm");
    p.set("age", "33");
    p.set("country", "한국");
    console.log(p.toString());

    // axios.get("/api/main28/sub15?" + p.toString());
    axios.get("/api/main28/sub15?" + p);
  }

  function handleButton16Click() {
    const p = new URLSearchParams();
    p.set("fruit", "apple");
    p.set("price", 5000);
    p.set("location", "강남");
    axios.get("/api/main28/sub16?" + p);
  }

  return (
    <div>
      <button onClick={handleButton16Click}>요청 16</button>
      <hr />
      <button onClick={handleButton15Click}>요청 15</button>
      <hr />
      <button onClick={handleButton14Click}>요청 14</button>
      <hr />
      <button onClick={handleButton13Click}>
        요청13 URLSearchParams 객체 활용{" "}
      </button>
      <hr />
      <button onClick={handleButton12Click}>요청 12</button>
      <hr />
      <button onClick={handleButton11Click}>요청 11 + query string</button>
      <hr />
      <button onClick={handleButton10Click}>요청 10 + query string</button>
      <hr />
      <button onClick={handleButton9Click}>요청 9 + query string</button>
      <hr />
      <button onClick={handleButton8Click}>요청 8 w/ query string</button>
      <hr />
      {/*연습 : axios.get 메소드 활용해서 7버튼 클릭시 get /api/main28/sub7 요청 보내기*/}
      {/* server에서 get /api/main28/sub7 요청 받기 */}
      <button onClick={handleButton7Click}>요청 7</button>
      <hr />
      <button onClick={handleButton6Click}>요청 6</button>
      <hr />
      {/* 연습 : 버튼 5 클릭하면 post /api/main28/sub4 으로 요청*/}
      {/* 서버에서 post /api/main28/sub4 의 요청 받는 method 만들기*/}

      <button onClick={handleButton5Click}>요청 5</button>
      <hr />

      {/* 연습 : 버튼 4 클릭하면 get /api/main28/sub3 으로 요청 보내기*/}
      {/* 서버에서  get /api/main28/sub3 의 요청 받는 method 만들기*/}
      <button onClick={handl3Button4Click}>요청 4</button>
      <hr />
      <button onClick={handleButton3Click}>요청 보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기 1</button>
    </div>
  );
}

export default App53;
