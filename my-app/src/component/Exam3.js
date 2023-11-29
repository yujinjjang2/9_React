import React, { useState } from "react";

// 상태 내리꽂기(Props Drilling) : 부모가 가진 상태(state)를 자식에게 전달해서
//                                  자식이 사용할 수 있게끔 하는 것 

// 부모 컴포넌트
function Exam3() {
    // const [state(상태값 자체), set(상태를 세팅해줄 때 사용하는 함수)]
    const [name, setName] = useState("유재석");
    // 리액트 컴포넌트의 state 를 변경해야 할 때,
    // 무조건 setState를 통해서 업데이트 해주어야하며,
    // 업데이트 하는 과정에서 기존의 상태값을 직접적으로 수정하면 안됨
    // == 불변성의 법칙

    return (
        <MyComponent name={name} /> // props를 만든 것 name={"유재석"} -> Key:Value 형태
    );
}


// 자식 컴포넌트
function MyComponent(props) {
    return (
        <div>
            <p>안녕</p>
            <p>나는 {props.name}이야</p>
            <p>{props.age}</p>
            <OtherComponent name={props.name}/>
        </div>
    );
}

// 자식의 자식 컴포넌트
function OtherComponent(props) {
    return (
        <div>{props.name}</div>
    )
}

export default Exam3; // 최종적으로 export 할 것 지정해주기만 하면 됨! (컴포넌트는 여러개 일 수 있다)