import React, { useState } from "react";

// 상태 끌어올리기

// 부모컴포넌트
const Exam4 = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeId = (event) => {
        setId(event.target.value);
    }

    const onChangePw = (event) => {
        setId(event.target.value);
    }

    return (
        <>
            <Id onChangeId={onChangeId}/>
            <Pw onChangePw={onChangePw}/>
            <div>
                <button disabled={id.length === 0 || Pw.length === 0}>Login</button>
            </div>
        </>
    );

}

// 자식컴포넌트 Id
            // 속성 이름 값을 전달!
const Id = ({onChangeId}) => {
    
    return (
        <div>
            <label htmlFor="id">ID: </label>
            <input id="id" onChange={onChangeId} />
        </div>
    );
}

// 자식컴포넌트 Pw
 const Pw = ({onChangePw}) => {
    return (
        <div>
            <label htmlFor="pw">Pw: </label>
            <input type="password" id="pw" onChange={onChangePw} />
        </div>
    )
 }

export default Exam4;
