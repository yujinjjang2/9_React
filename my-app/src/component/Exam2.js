import React, { useState } from 'react';

// rsc = 함수 단축키(자동완성)
// rcc = 클래스 단축키

const Exam2 = () => {

    // useState = 상태를 관리해주는 기본 hook(부가 기능) 중 하나
    const [count, setCount] = useState(0);
    // const [name, setName] = useState(''); -> 이런식으로 만들기 나름!

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default Exam2;