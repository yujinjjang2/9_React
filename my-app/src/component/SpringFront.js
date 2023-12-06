import React, { useState } from "react";

const SpringFront = () => {

    const [message, setMessage] = useState([]); // 초기값 : 배열
    const [user, setUser] = useState(""); // 초기값 : 빈문자열

    const getPortNumber = () => {
        fetch("/getPortNumber")
        .then((res) => res.json())
        .then((data) => setMessage(data))
        .catch((err) => console.log("err::" , err));
    }

    const getUserInfo = () => {
        fetch("/getUserInfo" , {
            method: "post",
            headers: {
                'Content-Type': 'application/json', // 요청
                'Accept': 'application/json', // 응답
            },
            body: JSON.stringify({ // 전달하려는 데이터를 JSON 객체로 body에 실어서 보낼 것!
                name: "홍길동",
                age: 20
            })
        })
        .then((res) => res.text()) // text 형태 파싱하고
        .then((data) => setUser(data)) // 파싱완료 -> 데이터 상태에 세팅
        .catch((err) => console.log(err)); // 예외발생시 콘솔 출력
    }

    return (
        <>
            <div>
                <p>1. 서버로부터 응답 받은 값</p>
                <button onClick={getPortNumber}>통신하기</button>
                <ul>{message.map((el, idx) => <li key={idx}>{el}</li>)}</ul>
            </div>

            <div>
                <p>2. 서버로 값 전달 후, 응답 받은 값</p>
                <button onClick={getUserInfo}>통신하기</button>
                <ul>{user && <li>{user}</li>}</ul>
            </div>
        </>
    );
}

/* function SpringFront() {
                            -----------> 이 형태도 상관 없음!
} */

export default SpringFront;