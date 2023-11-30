import React, { useState } from "react";

function Exam5() {
    //return <Exam5_1 />
    //return <Exam5_2 />
    //return <Exam5_3 isLogin={false} />
    return <Exam5_4 />
}

// jsx 예제 1 : 기본 태그 // 속성에 넣는 값 : 변수
function Exam5_1() {

    const name = "React";
    const element = <h1>Hello, {name} !</h1>;

    return element;
}

// jsx 예제 2 : img 태그 // 속성에 넣는 값 : 상태
function Exam5_2() {

    const [userImg, setUserImg] = useState("https://i.ibb.co/b7CSJ51/image.jpg");
    const element = <img src={userImg} />

    return element;
}

// jsx 예제 3 : 로그인 여부에 따라 화면 다르게 보이기
function Exam5_3(props) {

    if(props.isLogin) {
        return <h1>Welcome~!</h1>;
    } else {
        return <h1>Please sign up</h1>;
    }

}

// jsx 예제 4 : 배열을 이용한 화면 랜더링 // 리액트 개발 시 가장 많이 사용하는 방법!
function Exam5_4() {

    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) => <li>{number}</li>);
    // [<li>{number}</li>, <li>{number}</li>, <li>{number}</li>, <li>{number}</li>, <li>{number}</li>]

    return <ul>{listItems}</ul>
    /*
    <ul>
       <li>{number}</li>
       <li>{number}</li>
       <li>{number}</li>
       <li>{number}</li>
       <li>{number}</li> 
    </ul>
    */

}


export default Exam5;