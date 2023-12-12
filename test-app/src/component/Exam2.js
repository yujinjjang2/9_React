import React, { useState } from 'react';

const Exam2 = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleClick1 = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleClick1}>Decrement</button>
        </div>
    );
};

export default Exam2;